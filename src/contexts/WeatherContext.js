import React, { createContext, useReducer } from 'react';
import { weatherReducer } from '../reducers/WeatherReducers';

export const WeatherContext = createContext()

const state = {
    cityName: '',
    day: '',
    weatherDescription: '',
    temp: '',
    weatherIcon: '',
    forecast: []
}

const WeatherContextProvider = (props) => {
    const [weather, dispatch] = useReducer(weatherReducer, state)
    return (
        <WeatherContext.Provider value={weather}>
            {props.children}
        </WeatherContext.Provider>
    );
}
 
export default WeatherContextProvider;