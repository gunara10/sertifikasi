import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import Redis, { RedisOptions } from 'ioredis';

// Kalau ingin ketat pada tipe instance, boleh juga:
// import type { Redis as RedisType } from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  private client!: Redis; // atau: private client!: RedisType;

  async onModuleInit() {
    const host = process.env.REDIS_HOST || '127.0.0.1';
    const port = Number.parseInt(process.env.REDIS_PORT || '6379', 10);
    const password = process.env.REDIS_PASSWORD || undefined;

    const options: RedisOptions = {
      host,
      port,
      password,
      // backoff sederhana: 200ms, 400ms, ... s/d 2000ms
      retryStrategy: (times) => Math.min(times * 200, 2000),
      reconnectOnError: (err) => {
        const msg = err?.message || '';
        const should = ['READONLY', 'ECONNRESET', 'ETIMEDOUT'].some(k => msg.includes(k));
        if (should) this.logger.warn(`🔁 Redis reconnectOnError: ${msg}`);
        return should;
      },
      maxRetriesPerRequest: 3,
      enableAutoPipelining: true,
      connectTimeout: 10_000,
    };

    this.client = new Redis(options);

    this.client.on('connect', () => this.logger.log('✅ Redis connected'));
    this.client.on('reconnecting', () => this.logger.warn('🔁 Redis reconnecting...'));
    this.client.on('error', (err) => this.logger.error('❌ Redis error', err as any));

    // Sanity check
    try {
      await this.client.ping();
      this.logger.log('🏓 Redis ping OK');
    } catch (e) {
      this.logger.error('❌ Redis ping failed', e as any);
    }
  }

  async onModuleDestroy() {
    if (this.client) {
      await this.client.quit();
      this.logger.log('🧹 Redis disconnected');
    }
  }

  getClient() {
    return this.client;
  }

  // ====== Primitive Helpers ======

  async set(key: string, value: unknown, ttlSeconds?: number): Promise<void> {
    const serialized =
      typeof value === 'string' ? value : JSON.stringify(value);
    if (ttlSeconds && ttlSeconds > 0) {
      await this.client.set(key, serialized, 'EX', ttlSeconds);
    } else {
      await this.client.set(key, serialized);
    }
  }

  async get<T = any>(key: string): Promise<T | null> {
    const raw = await this.client.get(key);
    if (raw == null) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      // Jika bukan JSON, kembalikan string apa adanya
      return raw as unknown as T;
    }
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  async exists(key: string): Promise<boolean> {
    const n = await this.client.exists(key);
    return n === 1;
  }

  // ====== Namespaced Helpers (Applications) ======

  private appKey(id: string) {
    return `app:${id}`;
  }

  async cacheApplication(applicationId: string, data: unknown, ttlSeconds = 3600): Promise<void> {
    await this.set(this.appKey(applicationId), data, ttlSeconds);
  }

  async getCachedApplication<T = any>(applicationId: string): Promise<T | null> {
    return this.get<T>(this.appKey(applicationId));
  }

  async invalidateApplicationCache(applicationId: string): Promise<void> {
    await this.del(this.appKey(applicationId));
  }

  // ====== Namespaced Helpers (Sessions) ======

  private sessionKey(id: string) {
    return `session:${id}`;
  }

  async setSession(sessionId: string, data: unknown, ttlSeconds = 86_400): Promise<void> {
    await this.set(this.sessionKey(sessionId), data, ttlSeconds);
  }

  async getSession<T = any>(sessionId: string): Promise<T | null> {
    return this.get<T>(this.sessionKey(sessionId));
  }

  async deleteSession(sessionId: string): Promise<void> {
    await this.del(this.sessionKey(sessionId));
  }
}
