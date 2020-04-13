import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const weatherCard = ({ currentWeather }) => {
    const {
        city,
        country,
        date,
        iconUrl,
        humidity,
        temperature,
        description,
        wind_speed
    } = currentWeather;
    return (
        <div className="weather card weather-card text-dark" styles={{ marginTop: '40px' }}>
            <div className="card-body pb-3">
                <h4 className="card-title font-weight-bold ">{city}, {country}</h4>
                <p className="card-text">{date}, {description}</p>
                <div className="d-flex justify-content-between">
                    <p className="display-2">{Math.round(temperature - 273.15)}°C</p>
                    <div id="icon" ><img id="wicon" src={iconUrl} alt="Weather icon"/></div>
                    {/* <i className="fas fa-sun-o pt-3 amber-text"></i> */}
                </div>
                <div className="d-flex justify-content-between mb-4">
                    <p><i className="fas fa-tint fa-lg text-info pr-2"></i>{humidity}% Humidity</p>
                    <p><i className="fas fa-wind fa-lg text-info pr-2"></i>{wind_speed}</p>
                </div>
            </div>

        </div>
    )
}

export default weatherCard;