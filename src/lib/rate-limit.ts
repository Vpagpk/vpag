import { NextRequest } from 'next/server';

interface RateLimitConfig {
  interval: number;
  maxRequests: number;
}

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export function rateLimit(config: RateLimitConfig) {
  const { interval, maxRequests } = config;

  return {
    check: (request: NextRequest, identifier: string): { 
      success: boolean; 
      remaining: number;
      reset: number;
      limit: number;
    } => {
      const now = Date.now();
      const key = `${identifier}:${request.nextUrl.pathname}`;

      if (store[key] && store[key].resetTime < now) {
        delete store[key];
      }

      if (!store[key]) {
        store[key] = {
          count: 0,
          resetTime: now + interval,
        };
      }

      const limitData = store[key];

      if (limitData.count >= maxRequests) {
        return {
          success: false,
          remaining: 0,
          reset: limitData.resetTime,
          limit: maxRequests,
        };
      }

      limitData.count++;

      return {
        success: true,
        remaining: maxRequests - limitData.count,
        reset: limitData.resetTime,
        limit: maxRequests,
      };
    },
  };
}