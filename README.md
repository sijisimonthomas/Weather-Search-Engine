## Weather Search Engine

A full-stack web application that lets users search for real-time weather data by city name. Built with React, Node.js, and OpenWeatherMap API, it features live data fetching, caching, and unit toggling between Metric and Imperial.

### Features

- Search weather by city name
- Toggle between Metric (°C) and Imperial (°F)
- Fast response with caching for repeat queries
- Intelligent backend with error handling
- Clean, responsive UI with dark theme

### Technologies Used

| Layer       | Tech Stack             |
|-------------|------------------------|
| Frontend    | React + Vite           |
| Backend     | Node.js + Express      |
| API         | OpenWeatherMap         |
| Styling     | CSS (custom theme)     |
| Caching     | In-memory (Map object) |


## Folder Structure

assignment/ ├─ server/ # Backend (Express) │ ├─ src/ │ │ ├─ routes.js │ │ ├─ weather.js │ │ └─ config.js │ ├─ .env │ └─ package.json ├─ client/ # Frontend (React) │ ├─ src/ │ │ ├─ App.jsx │ │ ├─ api.js │ │ ├─ styles.css │ │ └─ components/ │ │ ├─ SearchBar.jsx │ │ └─ WeatherCard.jsx │ └─ package.json

## Setup Instructions

1. Clone the repo

  git clone https://github.com/your-username/weather-search-engine.git  
  cd weather-search-engine

2. Backend setup

  cd server  
  npm install

Create a .env file:
  OPENWEATHER_API_KEY=your_actual_key_here  
  PORT=4000  
  CACHE_MAX_ENTRIES=500  
  CACHE_TTL_MS=300000  
  DEFAULT_UNITS=metric

Start backend:
  npm run dev

3. Frontend setup

  cd ../client  
  npm install  
  npm run dev

Open browser at:  
http://localhost:5173

## API Reference

  GET /api/weather?city={name}&units={metric|imperial}  
  Returns weather data for a given city.

  GET /api/health  
  Returns { status: "ok", time: "..." } to confirm backend is running.

## Screenshots

1. Testing Health Endpoint-
   
   <img width="624" height="351" alt="image" src="https://github.com/user-attachments/assets/0115c456-85cf-4691-a317-5f5bceaeb7f9" />

2. Testing Weather Endpoint-

   <img width="624" height="351" alt="image" src="https://github.com/user-attachments/assets/bb493dca-def6-43fa-9c1d-dd878b3cf484" />

3. Weather Search (in celsius)-

   <img width="624" height="351" alt="image" src="https://github.com/user-attachments/assets/b648fe32-ffaf-4bbb-8a3f-070a20bb4cce" />

4. Weather Search (in fahrenheit)-

   <img width="624" height="351" alt="image" src="https://github.com/user-attachments/assets/bc1df6da-374d-4987-9b28-f0aae9f84a24" />

5. Terminal-
  
   <img width="624" height="351" alt="image" src="https://github.com/user-attachments/assets/32d1016e-2900-4f5b-8109-4e1f624ddee4" />




