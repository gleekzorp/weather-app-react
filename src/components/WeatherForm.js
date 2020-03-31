import React, { useState, useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

const WeatherForm = () => {
    const { getCurrentWeather } = useContext(WeatherContext)
    const [zip, setZip] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        getCurrentWeather(zip)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
            />
            <input type="submit" value="Search"/>
        </form>
    );
}
 
export default WeatherForm;