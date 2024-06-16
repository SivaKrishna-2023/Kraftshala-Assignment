import React from 'react';
import './WeatherDisplay.css'

const WeatherDisplay = ({ data }) => {
  return (
    <div className="weather-display">
      <h2>{data.location}</h2>
      <p>Temperature: {data.list[0].main.temp}°C</p>
      <p>Date: {new Date(data.list[0].dt_txt).toLocaleDateString()}</p>
      <p>Time: {new Date(data.list[0].dt_txt).toLocaleTimeString()}</p>
      <p>Humidity: {data.list[0].main.humidity}%</p>
      <p>Wind Speed: {data.list[0].wind.speed} m/s</p>
      <p>Description: {data.list[0].weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;