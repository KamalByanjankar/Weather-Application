import React from 'react'
import Header from './Headers/Header'
import './WeatherDetails.css'
import WeatherHighlights from './WeatherHighlights/WeatherHighlights'
import WeeklyWeatherForecast from './WeeklyWeatherForecast/WeeklyWeatherForecast'

function WeatherDetails({weather, units, setUnits}) {
  return (
    <div className="weatherDetails">
        <Header units={units} setUnits={setUnits}/>
        <WeeklyWeatherForecast items={weather.daily}/>
        <WeatherHighlights weather={weather} />
    </div>
  )
}

export default WeatherDetails