import React from 'react'
import Header from './Headers/Header'
import './WeatherDetails.css'
import WeatherHighlights from './WeatherHighlights/WeatherHighlights'
import WeeklyWeatherForecast from './WeeklyWeatherForecast/WeeklyWeatherForecast'

function WeatherDetails() {
  return (
    <div className="weatherDetails">
        <Header />
        <WeeklyWeatherForecast />
        <WeatherHighlights />
    </div>
  )
}

export default WeatherDetails