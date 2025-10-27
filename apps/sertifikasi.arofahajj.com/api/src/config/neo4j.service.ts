import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import neo4j, { Driver, Session, SessionMode } from 'neo4j-driver';

type Dict = Record<string, any>;

@Injectable()
export class Neo4jService implements OnModuleInit, OnModuleDestroy {
  private driver!: Driver;
  private readonly logger = new Logger(Neo4jService.name);

  async onModuleInit() {
    const uri = process.env.NEO4J_URI || 'bolt://localhost:7687';
    const user = process.env.NEO4J_USER || 'neo4j';
    const password = process.env.NEO4J_PASSWORD || 'password';

    try {
      // Driver options yang umum dipakai di prod
      this.driver = neo4j.driver(
        uri,
        neo4j.auth.basic(user, password),
        {
          /* beberapa opsi yang aman dipakai */
          maxConnectionPoolSize: 50,
          connectionTimeout: 10_000,
          // idle & lifetime membantu rotasi koneksi lebih stabil
          // @ts-ignore (opsi-opsi ini tergantung versi driver)
          maxConnectionLifetime: 60 * 60 * 1000, // 1 jam
          // @ts-ignore
          disableLosslessIntegers: true,
        }
      );

      // Test connection (read-only)
      await this.read(async (session) => {
        await session.run('RETURN 1 AS ok');
      });

      this.logger.log('✅ Neo4j connected successfully');
    } catch (error) {
      this.logger.error('❌ Failed to connect to Neo4j', error as any);
    }
  }

  async onModuleDestroy() {
    if (this.driver) {
      await this.driver.close();
      this.logger.log('❌ Neo4j disconnected');
    }
  }

  getDriver(): Driver {
    return this.driver;
  }

  /** Buat session READ/WRITE dengan helper */
  private getSession(mode: SessionMode = neo4j.session.READ): Session {
    return this.driver.session({ defaultAccessMode: mode });
  }

  async read<T>(fn: (session: Session) => Promise<T>): Promise<T> {
    const session = this.getSession(neo4j.session.READ);
    try {
      return await fn(session);
    } finally {
      await session.close();
    }
  }

  async write<T>(fn: (session: Session) => Promise<T>): Promise<T> {
    const session = this.getSession(neo4j.session.WRITE);
    try {
      return await fn(session);
    } finally {
      await session.close();
    }
  }

  /** Utility umum eksekusi query */
  async runQuery(cypher: string, params?: Dict) {
    return this.read(async (session) => {
      const res = await session.run(cypher, params);
      return res.records.map((r) => r.toObject());
    });
  }

  /** ====== WORKFLOW HELPERS ====== */

  // Sanitasi label/rel agar huruf/angka/underscore saja (hindari injeksi karena label/rel tak bisa diparameterisasi)
  private sanitizeLabel(name: string): string {
    const s = String(name || '').replace(/[^\w]/g, '');
    if (!s) throw new Error('Invalid label');
    return s;
  }
  private sanitizeRel(name: string): string {
    const s = String(name || '').replace(/[^\w]/g, '').toUpperCase();
    if (!s) throw new Error('Invalid relationship type');
    return s;
  }

  async createWorkflowNode(label: string, properties: Dict) {
    const safeLabel = this.sanitizeLabel(label);
    return this.write(async (session) => {
      const res = await session.run(
        `CREATE (n:${safeLabel} $properties) RETURN n`,
        { properties }
      );
      return res.records[0]?.get('n');
    });
  }

  async createRelationship(
    fromLabel: string,
    fromId: string,
    toLabel: string,
    toId: string,
    relationshipType: string,
    properties?: Dict
  ) {
    const a = this.sanitizeLabel(fromLabel);
    const b = this.sanitizeLabel(toLabel);
    const rel = this.sanitizeRel(relationshipType);

    return this.write(async (session) => {
      const res = await session.run(
        `
        MATCH (x:${a} {id: $fromId}), (y:${b} {id: $toId})
        CREATE (x)-[r:${rel} $properties]->(y)
        RETURN r
        `,
        { fromId, toId, properties: properties ?? {} }
      );
      return res.records[0]?.get('r');
    });
  }

  async updateWorkflowState(nodeId: string, newState: string) {
    return this.write(async (session) => {
      const res = await session.run(
        `
        MATCH (n {id: $nodeId})
        SET n.state = $newState, n.updatedAt = datetime()
        RETURN n
        `,
        { nodeId, newState }
      );
      return res.records[0]?.get('n');
    });
  }
}
