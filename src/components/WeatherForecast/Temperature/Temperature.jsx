import React from 'react'
import { getLocalTime, getIconFromUrl } from '../../WeatherServices/WeatherServices'
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
          src={getIconFromUrl(icon)}
          className="temperature__icon"
          alt=""
        />
        <div className="temperature__details">
            <p className="temp">{temp.toFixed()}°C</p>
            <p className="day">{getLocalTime(dt, timezone)}</p>
        </div>
    </div>
  )
}

export default Temperature