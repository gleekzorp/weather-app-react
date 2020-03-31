import React, {useContext} from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

const CurrentWeather = () => {
    const { cityName, weatherDescription, temp, day, weatherIcon} = useContext(WeatherContext)
    return (
        cityName ? (
            <div>
                <div>
                    {cityName}
                </div>
                <div>
                    {weatherDescription}
                </div>
                <div>
                    {temp}
                </div>
                <div>
                    {day}
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt=""/>
                </div>
            </div>
        ) : (
            null
        )
    );
}
 
export default CurrentWeather;