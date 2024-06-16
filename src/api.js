const API_KEY = '9637348420b33f64128144b5badefb13';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchWeatherData = async (latitude, longitude) => {
  const response = await fetch(`${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();
  return data;
};