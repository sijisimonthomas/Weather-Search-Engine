import { LRUCache } from 'lru-cache';
import { config } from './config.js';

export const cache = new LRUCache({
  max: config.cache.max,
  ttl: config.cache.ttl,
  allowStale: false,
  updateAgeOnGet: true
});

export function makeCacheKey(city, units) {
  return `weather:${units}:${city.trim().toLowerCase()}`;
}