import React from 'react'
import './WeatherHighlights.css'

function WeatherHighlights() {
  return (
    <div className="weatherHighlights">
        <p className="weatherHightlights__header">Today's Highlights</p>
        <div className="weatherHighlights__component">
            <div className="weatherHighlights__details">
                <p className="weatherHightlights__details__header">Wind Status</p>
                <p className="weatherHightlights__details__value">7.70 <sub>km/h</sub></p>
                <p>WSW</p>
            </div>
            <div className="weatherHighlights__details">
                <p className="weatherHightlights__details__header">Humidity</p>
                <p className="weatherHightlights__details__value">12 <sup>%</sup></p>
                <p>Normal</p>
            </div>
            <div className="weatherHighlights__details">
                <p className="weatherHightlights__details__header">Visibility</p>
                <p className="weatherHightlights__details__value">5.2 <sub>km</sub></p>
                <p>Average</p>
            </div>
            <div className="weatherHighlights__details">
                <p className="weatherHightlights__details__header">Air Quality</p>
                <p className="weatherHightlights__details__value">105</p>
                <p>Unhealthy</p>
            </div>
            <div className="weatherHighlights__details">
                <p className="weatherHightlights__details__header">Sunrise & Sunset</p>
                <p className="weatherHightlights__details__sun">5:42 PM</p>
                <p className="weatherHightlights__details__sun">6:35 AM</p>
            </div>
            <div className="weatherHighlights__details">
                <p className="weatherHightlights__details__header">Pressure</p>
                <p className="weatherHightlights__details__value">7.70 <sub>km/h</sub></p>
                <p>Normal</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherHighlights