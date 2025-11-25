import { useState } from 'react';

export default function SearchBar({ onSearch, units, setUnits }) {
  const [city, setCity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (city.trim()) onSearch(city.trim());
  }

  return (
    <div className="search-bar-wrapper">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          placeholder="Enter city name (eg. Pune, Mumbai)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="units">
        <label>
          <input
            type="radio"
            name="units"
            value="metric"
            checked={units === 'metric'}
            onChange={(e) => setUnits(e.target.value)}
          />
          Metric (°C)
        </label>
        <label>
          <input
            type="radio"
            name="units"
            value="imperial"
            checked={units === 'imperial'}
            onChange={(e) => setUnits(e.target.value)}
          />
          Imperial (°F)
        </label>
      </div>
    </div>
  );
}
