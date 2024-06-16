import React, { useState } from 'react';
import './SearchForm.css'

const SearchForm = ({ onSearch }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (latitude.trim() === '' || longitude.trim() === '' || location.trim() === '') {
      alert('Please enter latitude, longitude, and location');
      return;
    }
    onSearch(latitude, longitude, location);
    setLatitude('');
    setLongitude('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        placeholder="Enter latitude"
        required
      />
      <input
        type="text"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        placeholder="Enter longitude"
        required
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location (e.g., city name)"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
