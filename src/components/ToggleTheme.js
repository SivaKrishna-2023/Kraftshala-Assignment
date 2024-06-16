import React, { useState } from 'react';

const ToggleTheme = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    toggleTheme();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={handleToggle} className={isDarkMode ? 'dark' : 'light'}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ToggleTheme;