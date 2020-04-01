import React from 'react';
import WeatherContextProvider from './contexts/WeatherContext';
import WeatherForm from './components/WeatherForm';
import CurrentWeather from './components/CurrentWeather';
import FiveDayForecast from './components/fiveday/FiveDayForecast';

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <WeatherForm />
        <CurrentWeather />
        <FiveDayForecast />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
