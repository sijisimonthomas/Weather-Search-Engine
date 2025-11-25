export default function WeatherCard({ data }) {
  const { city, country, weather, temp, humidity, wind, units, source } = data;

  const iconUrl = weather?.icon
    ? `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
    : null;

  return (
    <div className="card">
      <h2>{city} {country ? `(${country})` : ''}</h2>
      <p>{weather?.main} — {weather?.description} ({source})</p>
      {iconUrl && <img src={iconUrl} alt="weather icon" />}
      <ul>
        <li>Temperature: {Math.round(temp?.current)}° {units === 'imperial' ? 'F' : 'C'}</li>
        <li>Feels like: {Math.round(temp?.feels_like)}°</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind?.speed} {units === 'imperial' ? 'mph' : 'm/s'}</li>
      </ul>
    </div>
  );
}
