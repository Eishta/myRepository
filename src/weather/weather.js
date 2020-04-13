import React, { useState } from 'react';
import axios from 'axios';
import './weather.css';
import CityInput from './cityInput';
import WeatherCard from './weatherCard';
import moment from 'moment';

/**
 * Funtion to map the response object to a Map
 * @param {*} data 
 */
const mapDataToWeatherInterface=data=> {
    const mapped = {
        city: data.name,
        country: data.sys.country,
        date: moment(data.dt * 1000).format('dddd, HH:mm'),
        iconUrl: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        humidity: data.main.humidity,
        temperature: data.main.temp,
        description: data.weather[0].description,
        wind_speed: Math.round(data.wind.speed * 3.6) // convert from m/s to km/h
    };

    if (data.weather[0].icon) {
        mapped.icon = data.weather[0].icon;
    }

    return mapped;
}
/**
 * Callback triggerd on recieving a response
 * Check the Status of the response and handle accordingly
 * @param {*Object} response 
 * @param {*Object} response.data
 */
const handleResponse=response=>{
    if (response.statusText === 'OK') {
        return response.data;
    } else {
        throw new Error("Error: Location " + response.statusText);
    }
}
/**
 * Weather Component
 * @param {*Object} props 
 */
const Weather = props => {
    const [city, setCity] = useState("Eldoret");
    const [error, setError] = useState(null);
    const [currentWeather, setCurrentWeather] = useState({});
    /**
     * Callback triggered when the value changes in the autocomplete field
     * 
     * @param {Event} e JavaScript Event
     */
    const handleCityChange = city => {
        setCity(city);
    };
    /**
     * Callback triggered to search the weather of the city chosen
     * 
     * @param {Event} e JavaScript Event
     */
    const getWeather = (e) => {
        e.preventDefault();
            axios.get(`/getWeather?city=${city}`)
            .then(res => handleResponse(res))
            .then(weather => {
                if (Object.entries(weather).length) {
                    const mappedData = mapDataToWeatherInterface(weather);
                    setCurrentWeather(mappedData);
                }
            }).catch(err => {
                console.error(`Error fetching current weather for ${city}: `, error);
                setError(err.message);
            });;
    }
    return (
        <div>
            <section className="top-banner">
                <div className="container">
                    <h1 className="heading">Simple Weather App</h1>

                    <CityInput onChangeCity={handleCityChange} getWeather={getWeather} />

                    {Object.entries(currentWeather).length ? < WeatherCard currentWeather={currentWeather} /> : null}

                </div>
            </section>
        </div>
    )

}

export default Weather;