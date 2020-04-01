import React from 'react';

const FiveDayItem = (props) => {
    return (
        <div className="forecast-item">
            <div>
                {props.description}
            </div>
            <div>
                {props.temp}
            </div>
            <div>
                {props.date}
            </div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`} alt="Weather Icon"/>
            </div>
        </div>
    );
}
 
export default FiveDayItem;