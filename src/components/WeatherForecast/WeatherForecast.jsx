import React from 'react'
import Details from './Details/Details'
import Inputs from './Inputs/Inputs'
import Temperature from './Temperature/Temperature'
import './WeatherForecast.css'
import { getLocalTime } from '../WeatherServices/WeatherServices'

function WeatherForecast({weather, setQuery, units}) {
  const description = weather.description;

  const sunriseTime = getLocalTime(weather.sunrise, weather.timezone, "HH:MM")
  const sunsetTime = getLocalTime(weather.sunset, weather.timezone, "HH:MM")

  var today = new Date();
  var currentTime = today.getHours() + ":" + today.getMinutes();
  // const currentTime = "20:06"

  var weatherName;
  if(sunriseTime <= currentTime && currentTime <= sunsetTime){
    switch(description){
      case "clear sky":
        weatherName = "weatherforecast sunnyday"
        break;
        
      case "few clouds":
      case "broken clouds":
      case "scattered clouds":
      case "overcast clouds":
        weatherName = "weatherforecast dayfewclouds"
        break;

      case "light rain":
      case "shower rain":
      case "moderate rain":
        weatherName = "weatherforecast dayrainfall"
        break;

      case "thunderstorm with rain":
        weatherName = "weatherforecast thunderstorm"
        break;

      case "haze":
        weatherName="weatherforecast hazysky"
        break;

      case "snowfall":
        weatherName="weatherforecast snowfall"
        break;

      default:
        weatherName = "weatherforecast"
    }
  }
  else{
    switch(description){
      case "clear sky":
        weatherName = "weatherforecast night"
        break;
      
      case "few clouds":
        weatherName = "weatherforecast nightCloudy"
        break;

      default:
        weatherName="weatherforecast"
    }
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