import { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import { getWeather } from './api.js';
import './styles.css';

export default function App() {
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSearch(city) {
    setError(null);
    setLoading(true);
    try {
      const res = await getWeather(city, units);
      setWeather(res);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <div className="header">
        <div className="logo" />
        <div>
          <div className="title">Weather Today</div>
          <div className="small">Powered by OpenWeather</div>
        </div>
      </div>

      <SearchBar onSearch={onSearch} units={units} setUnits={setUnits} />

      {loading && <div className="card">Loading…</div>}
      {error && <div className="error">{error}</div>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
