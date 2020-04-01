import React, { useContext } from 'react';
import FiveDayItem from './FiveDayItem';
import { WeatherContext } from '../../contexts/WeatherContext';

const FiveDayForecast = () => {
    const { forecast } = useContext(WeatherContext)
    return (
        forecast.length > 0 ? (
            <div className="forecast-container">
                <h1>Forecast</h1>
                <div className="forecast-items">
                    {forecast.filter(item => {
                        return item.dt_txt.includes("15:00:00")
                    }).map(item => {
                        return (
                            <FiveDayItem
                                key={item.dt}
                                description={item.weather[0].description}
                                temp={item.main.temp}
                                date={new Date(item.dt_txt).toDateString()}
                                weatherIcon={item.weather[0].icon}
                            />
                        )
                    })}
                </div>
            </div>
        ) : (
            null
        ) 
    );
}
 
export default FiveDayForecast;