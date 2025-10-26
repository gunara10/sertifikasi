import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;

  async onModuleInit() {
    this.client = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT) || 6379,
      password: process.env.REDIS_PASSWORD,
      retryDelayOnFailover: 100,
      maxRetriesPerRequest: 3,
    });

    this.client.on('connect', () => {
      console.log('✅ Redis connected successfully');
    });

    this.client.on('error', (err) => {
      console.error('❌ Redis connection error:', err);
    });
  }

  async onModuleDestroy() {
    if (this.client) {
      await this.client.quit();
      console.log('❌ Redis disconnected');
    }
  }

  getClient(): Redis {
    return this.client;
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    const serializedValue = JSON.stringify(value);
    if (ttl) {
      await this.client.setex(key, ttl, serializedValue);
    } else {
      await this.client.set(key, serializedValue);
    }
  }

  async get(key: string): Promise<any> {
    const value = await this.client.get(key);
    return value ? JSON.parse(value) : null;
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  async exists(key: string): Promise<boolean> {
    const result = await this.client.exists(key);
    return result === 1;
  }

  // Cache management for applications
  async cacheApplication(applicationId: string, data: any, ttl = 3600): Promise<void> {
    await this.set(`app:${applicationId}`, data, ttl);
  }

  async getCachedApplication(applicationId: string): Promise<any> {
    return this.get(`app:${applicationId}`);
  }

  async invalidateApplicationCache(applicationId: string): Promise<void> {
    await this.del(`app:${applicationId}`);
  }

  // Session management
  async setSession(sessionId: string, data: any, ttl = 86400): Promise<void> {
    await this.set(`session:${sessionId}`, data, ttl);
  }

  async getSession(sessionId: string): Promise<any> {
    return this.get(`session:${sessionId}`);
  }

  async deleteSession(sessionId: string): Promise<void> {
    await this.del(`session:${sessionId}`);
  }
}