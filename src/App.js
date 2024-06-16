import React, { useState } from 'react';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
import SearchForm from './components/SearchForm';
import ToggleTheme from './components/ToggleTheme';
import { fetchWeatherData } from './api';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light');

  const handleSearch = async (latitude, longitude, location) => {
    try {
      const data = await fetchWeatherData(latitude, longitude);
      setWeatherData({ ...data, location });
      setError('');
    } catch (err) {
      setError('Failed to fetch weather data. Please check the location.');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Weather Application</h1>
      <ToggleTheme toggleTheme={toggleTheme} />
      <SearchForm onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;