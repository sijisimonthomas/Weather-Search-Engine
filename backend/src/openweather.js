import fetch from 'node-fetch';
import { config } from './config.js';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchCurrentWeather(city, units = config.defaultUnits) {
  const url = new URL(BASE_URL);
  url.searchParams.set('q', city);
  url.searchParams.set('appid', config.openWeatherApiKey);
  url.searchParams.set('units', units);

  const res = await fetch(url.toString(), { timeout: 10_000 });
  const data = await res.json();

  if (!res.ok) {
    const message = data?.message || 'Failed to fetch weather';
    const code = data?.cod || res.status;
    throw Object.assign(new Error(message), { status: res.status, code });
  }

  // Normalize key attributes, include raw original
  return {
    city: data.name,
    country: data.sys?.country,
    coord: data.coord,
    timezone: data.timezone,
    dt: data.dt,
    weather: {
      main: data.weather?.[0]?.main,
      description: data.weather?.[0]?.description,
      icon: data.weather?.[0]?.icon
    },
    temp: {
      current: data.main?.temp,
      feels_like: data.main?.feels_like,
      min: data.main?.temp_min,
      max: data.main?.temp_max
    },
    pressure: data.main?.pressure,
    humidity: data.main?.humidity,
    visibility: data.visibility,
    wind: data.wind,
    clouds: data.clouds?.all,
    rain: data.rain?.['1h'] ?? data.rain?.['3h'],
    snow: data.snow?.['1h'] ?? data.snow?.['3h'],
    sunrise: data.sys?.sunrise,
    sunset: data.sys?.sunset,
    units,
    raw: data
  };
}