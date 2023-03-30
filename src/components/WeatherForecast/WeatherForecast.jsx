import React from 'react'
import Details from './Details/Details'
import Inputs from './Inputs/Inputs'
import Temperature from './Temperature/Temperature'
import './WeatherForecast.css'

function WeatherForecast({weather, setQuery, units}) {
  const description = weather.description;
  var weatherName;
  switch(description){
    case ("clear sky"):
      weatherName = "weatherforecast sunnyday"
      break;
    case ("few clouds"):
    case ("broken clouds"):
    case ("scattered clouds"):
      weatherName = "weatherforecast dayfewclouds"
      break;
    case ("light rain"):
      weatherName = "weatherforecast dayrainfall"
      break;
    default:
      weatherName = "weatherforecast"
  }
  return (
    <div className={weatherName}>
      <Inputs setQuery={setQuery}/>
      <Temperature weather={weather} units={units} />
      <Details weather={weather} />
    </div>
  )
}

export default WeatherForecast