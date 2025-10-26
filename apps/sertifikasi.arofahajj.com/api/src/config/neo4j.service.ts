import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Driver, neo4j } from 'neo4j-driver';

@Injectable()
export class Neo4jService implements OnModuleInit, OnModuleDestroy {
  private driver: Driver;

  async onModuleInit() {
    try {
      this.driver = neo4j.driver(
        process.env.NEO4J_URI || 'bolt://localhost:7687',
        neo4j.auth.basic(
          process.env.NEO4J_USER || 'neo4j',
          process.env.NEO4J_PASSWORD || 'password'
        )
      );

      // Test connection
      const session = this.driver.session();
      await session.run('RETURN 1');
      await session.close();

      console.log('✅ Neo4j connected successfully');
    } catch (error) {
      console.error('❌ Failed to connect to Neo4j:', error);
    }
  }

  async onModuleDestroy() {
    if (this.driver) {
      await this.driver.close();
      console.log('❌ Neo4j disconnected');
    }
  }

  getSession() {
    return this.driver.session();
  }

  async runQuery(query: string, params?: any) {
    const session = this.getSession();
    try {
      const result = await session.run(query, params);
      return result.records;
    } finally {
      await session.close();
    }
  }

  // Workflow state management
  async createWorkflowNode(label: string, properties: any) {
    const query = `
      CREATE (n:${label} $properties)
      RETURN n
    `;
    return this.runQuery(query, { properties });
  }

  async createRelationship(
    fromLabel: string,
    fromId: string,
    toLabel: string,
    toId: string,
    relationshipType: string,
    properties?: any
  ) {
    const query = `
      MATCH (a:${fromLabel} {id: $fromId}), (b:${toLabel} {id: $toId})
      CREATE (a)-[r:${relationshipType} $properties]->(b)
      RETURN r
    `;
    return this.runQuery(query, { fromId, toId, properties });
  }

  async updateWorkflowState(nodeId: string, newState: string) {
    const query = `
      MATCH (n {id: $nodeId})
      SET n.state = $newState, n.updatedAt = datetime()
      RETURN n
    `;
    return this.runQuery(query, { nodeId, newState });
  }
}