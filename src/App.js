import React from 'react';
import WeatherContextProvider from './contexts/WeatherContext';
import WeatherForm from './components/WeatherForm';
import CurrentWeather from './components/CurrentWeather';

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <WeatherForm />
        <CurrentWeather />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
