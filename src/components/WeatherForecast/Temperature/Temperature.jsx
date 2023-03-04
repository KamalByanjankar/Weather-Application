import React from 'react'
import { formatToLocalTime, iconUrlFromCode } from '../../WeatherServices/WeatherServices'
import './Temperature.css'

function Temperature({
  weather: {
    icon,
    temp, 
    dt,
    timezone,
  }
}) {
  return (
    <div className="temperature">
        <img
          src={iconUrlFromCode(icon)}
          className="temperature__icon"
          alt=""
        />
        <div className="temperature__details">
            <p className="temp">{temp.toFixed()}°C</p>
            <p className="day">{formatToLocalTime(dt, timezone)}</p>
        </div>
    </div>
  )
}

export default Temperature