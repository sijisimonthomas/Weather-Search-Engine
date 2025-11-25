import express from 'express';
import { cache, makeCacheKey } from './cache.js';
import { fetchCurrentWeather } from './openweather.js';
import { config } from './config.js';

export const router = express.Router();

/**
 * GET /api/weather?city=CityName&units=metric|imperial
 * Returns normalized weather details with caching.
 */
router.get('/weather', async (req, res) => {
  const city = (req.query.city || '').trim();
  const units = (req.query.units || config.defaultUnits).trim();

  if (!city) {
    return res.status(400).json({
      error: 'city query parameter is required',
      example: '/api/weather?city=London&units=metric'
    });
  }

  const key = makeCacheKey(city, units);
  const cached = cache.get(key);
  if (cached) {
    return res.json({ source: 'cache', ...cached });
  }

  try {
    const data = await fetchCurrentWeather(city, units);
    cache.set(key, data);
    return res.json({ source: 'live', ...data });
  } catch (err) {
    const status = err.status || 502;
    return res.status(status).json({
      error: err.message || 'Upstream fetch error',
      code: err.code,
      city,
      units
    });
  }
});

/**
 * GET /api/cache/stats
 * Cache diagnostics (count, size, ttl).
 */
router.get('/cache/stats', (req, res) => {
  res.json({
    entries: cache.size,
    ttl_ms: cache.ttl,
    max_entries: cache.max
  });
});