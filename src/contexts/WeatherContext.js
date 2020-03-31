import React, { createContext } from 'react';

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