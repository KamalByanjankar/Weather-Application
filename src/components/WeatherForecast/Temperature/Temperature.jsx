import React from 'react'
import { iconUrlFromCode } from '../../WeatherServices/WeatherServices'
import './Temperature.css'

function Temperature({
  weather: {
    icon, temp
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
            <p className="day">Monday, <span className="time">16:00</span></p>
        </div>
    </div>
  )
}

export default Temperature