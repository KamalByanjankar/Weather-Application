import React from 'react'
import Header from './Headers/Header'
import './WeatherDetails.css'
import WeatherHighlights from './WeatherHighlights/WeatherHighlights'
import WeeklyWeatherForecast from './WeeklyWeatherForecast/WeeklyWeatherForecast'

function WeatherDetails({weather}) {
  return (
    <div className="weatherDetails">
        <Header />
        <WeeklyWeatherForecast />
        <WeatherHighlights weather={weather} />
    </div>
  )
}

export default WeatherDetails