import React, { createContext, useReducer, useState } from 'react';
// import { weatherReducer } from '../reducers/WeatherReducers';

export const WeatherContext = createContext()

const apiKey = process.env.REACT_APP_WEATHER_API_KEY

const state = {
    zip: '',
    cityName: '',
    day: '',
    weatherDescription: '',
    temp: '',
    weatherIcon: '',
    forecast: []
}

const WeatherContextProvider = (props) => {
    // const [weather, dispatch] = useReducer(weatherReducer, state)
    const [weather, setWeather] = useState(state)

    const getCurrentWeather = (zip) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setWeather()
        })
        .catch(err => {
            console.log('There was an error fetching the weather api,', err)
        })
    }
    return (
        <WeatherContext.Provider value={{weather, getCurrentWeather: getCurrentWeather}}>
            {props.children}
        </WeatherContext.Provider>
    );
}
 
export default WeatherContextProvider;