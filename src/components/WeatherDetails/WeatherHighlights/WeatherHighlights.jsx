import React from 'react'
import './WeatherHighlights.css'

function WeatherHighlights({
    weather: {
        speed,
        humidity,
        visibility,
        pressure,
        sunrise, 
        sunset,
        feels_like,
    }
}) {
  return (
    <div className="weatherHighlights">
        <p className="weatherHightlights__header">Today's Highlights</p>
        <div className="weatherHighlights__component">
            <div className="weatherHighlights__details">
                <p className="weatherHightlights__details__header">Wind Status</p>
                <p className="weatherHightlights__details__value">{speed} <sub>km/h</sub></p>
            </div>
            <div className="weatherHighlights__details">
                <p className="weatherHightlights__details__header">Humidity</p>
                <p className="weatherHightlights__details__value">{humidity} <sup>%</sup></p>
                <p>Normal</p>
            </div>
            <div className="weatherHighlights__details">
                <p className="weatherHightlights__details__header">Visibility</p>
                <p className="weatherHightlights__details__value">{visibility/1000} <sub>km</sub></p>
                <p>Average</p>
            </div>
            <div className="weatherHighlights__details">
                <p className="weatherHightlights__details__header">Feels like</p>
                <p className="weatherHightlights__details__value">{feels_like.toFixed()}°</p>
            </div>
            <div className="weatherHighlights__details">
                <p className="weatherHightlights__details__header">Sunrise & Sunset</p>
                <p className="weatherHightlights__details__sun">5:42 PM</p>
                <p className="weatherHightlights__details__sun">6:35 AM</p>
            </div>
            <div className="weatherHighlights__details">
                <p className="weatherHightlights__details__header">Pressure</p>
                <p className="weatherHightlights__details__value">{pressure/1000} <sub>hPa</sub></p>
            </div>
        </div>
    </div>
  )
}

export default WeatherHighlights