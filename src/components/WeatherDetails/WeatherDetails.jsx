import React, { useState } from 'react'
import Header from './Headers/Header'
import HourlyWeatherForecast from './HourlyWeatherForecast/HourlyWeatherForecast'
import './WeatherDetails.css'
import WeatherHighlights from './WeatherHighlights/WeatherHighlights'
import WeeklyWeatherForecast from './WeeklyWeatherForecast/WeeklyWeatherForecast'

function WeatherDetails({weather, units, setUnits}) {
  const [options, setOptions] = useState("daily")

  return (
    <div className="weatherDetails">
        <Header units={units} setUnits={setUnits} setOptions={setOptions}/>
        {
          options === "weekly" ? <WeeklyWeatherForecast items={weather.daily}/> : <HourlyWeatherForecast items={weather.hourly} />
        }
        <WeatherHighlights weather={weather} />
    </div>
  )
}

export default WeatherDetails