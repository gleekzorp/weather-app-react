import React, { createContext, useState } from 'react';

export const WeatherContext = createContext()

const apiKey = process.env.REACT_APP_WEATHER_API_KEY

const state = {
    cityName: '',
    weatherDescription: '',
    temp: '',
    day: '',
    weatherIcon: '',
}

const WeatherContextProvider = (props) => {
    const [weather, setWeather] = useState(state)
    const [forecast, setForecast] = useState([])

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
            console.log('There was an error fetching the current weather api,', err)
        })
    }

    const getForecast = (zip) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setForecast(data.list)
        })
        .catch(err => {
            console.log('There was an error fetching the forecast api,', err)
        })
    }
    return (
        <WeatherContext.Provider value={{...weather, forecast, getCurrentWeather: getCurrentWeather, getForecast: getForecast}}>
            {props.children}
        </WeatherContext.Provider>
    );
}
 
export default WeatherContextProvider;