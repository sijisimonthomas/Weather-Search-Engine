import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '4000', 10),
  openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
  cache: {
    max: parseInt(process.env.CACHE_MAX_ENTRIES || '500', 10),
    ttl: parseInt(process.env.CACHE_TTL_MS || '300000', 10) // 5 mins
  },
  defaultUnits: process.env.DEFAULT_UNITS || 'metric'
};

if (!config.openWeatherApiKey) {
  console.error('Missing OPENWEATHER_API_KEY in environment.');
  process.exit(1);
}