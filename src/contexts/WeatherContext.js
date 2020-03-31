import React, { createContext, useState } from 'react';

export const WeatherContext = createContext()

const apiKey = process.env.REACT_APP_WEATHER_API_KEY

const state = {
    cityName: '',
    weatherDescription: '',
    temp: '',
    day: '',
    weatherIcon: '',
    forecast: []
}

const WeatherContextProvider = (props) => {
    const [weather, setWeather] = useState(state)

    const getCurrentWeather = (zip) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setWeather({
                ...weather,
                cityName: data.name,
                temp: data.main.temp,
                day: new Date().toDateString(),
                weatherDescription: data.weather[0].description,
                weatherIcon: data.weather[0].icon
            })
        })
        .catch(err => {
            console.log('There was an error fetching the weather api,', err)
        })
    }
    return (
        <WeatherContext.Provider value={{...weather, getCurrentWeather: getCurrentWeather}}>
            {props.children}
        </WeatherContext.Provider>
    );
}
 
export default WeatherContextProvider;