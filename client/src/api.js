const BASE_URL = 'http://localhost:4000/api';

export async function getWeather(city, units = 'metric') {
  const url = new URL(`${BASE_URL}/weather`);
  url.searchParams.set('city', city);
  url.searchParams.set('units', units);

  const res = await fetch(url.toString());
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error || `Request failed (${res.status})`);
  }
  return res.json();
}
