import React from 'react'
import Details from './Details/Details'
import Inputs from './Inputs/Inputs'
import Temperature from './Temperature/Temperature'
import './WeatherForecast.css'

function WeatherForecast({weather}) {
  return (
    <div className="weatherforecast">
        <Inputs />
        <Temperature weather={weather} />
        <Details weather={weather} />
    </div>
  )
}

export default WeatherForecast