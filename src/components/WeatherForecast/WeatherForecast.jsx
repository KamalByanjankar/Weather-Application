import React from 'react'
import Details from './Details/Details'
import Inputs from './Inputs/Inputs'
import Temperature from './Temperature/Temperature'
import './WeatherForecast.css'

function WeatherForecast({weather, setQuery, units}) {
  return (
    <div className="weatherforecast">
        <Inputs setQuery={setQuery}/>
        <Temperature weather={weather} units={units} />
        <Details weather={weather} />
    </div>
  )
}

export default WeatherForecast