import React from 'react'
import { getLocalTime, getIconFromUrl } from '../../WeatherServices/WeatherServices'
import './Temperature.css'

function Temperature({
  weather: {
    icon,
    temp, 
    dt,
    timezone,
  }, units
}) {
  console.log(units)
  return (
    <div className="temperature">
        <img
          src={getIconFromUrl(icon)}
          className="temperature__icon"
          alt=""
        />
        <div className="temperature__details">
            <p className="temp">
              {temp.toFixed()}
              {units === "metric" ? '°C' : '°F'}
            </p>
            <p>{getLocalTime(dt, timezone)}</p>
        </div>
    </div>
  )
}

export default Temperature