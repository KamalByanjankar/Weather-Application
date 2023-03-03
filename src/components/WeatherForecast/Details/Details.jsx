import React from 'react'
import {UilTemperaturePlus, UilTemperatureMinus, UilTemperatureEmpty} from "@iconscout/react-unicons"
import './Details.css'
import { iconUrlFromCode } from '../../WeatherServices/WeatherServices'

function Details({
  weather:{
      icon,
      description,
      temp_max,
      temp_min,
      feels_like,
      name,
      country
    }
  }) {
  return (
    <div className="details">
        <div className="weather__details">
          <img
            src={iconUrlFromCode(icon)}
            alt=""
          />
          <p>{description}</p>
        </div>
        <div className="weather__details__temp">
            <div className='weather__details'>
              <UilTemperaturePlus size={18}/>
              <p>Max Temperature : {temp_max.toFixed()}°</p>
            </div>
            <div className="weather__details">
              <UilTemperatureMinus size={18}/>
              <p>Min Temperature : {temp_min.toFixed()}°</p>  
            </div>
            <div className="weather__details">
              <UilTemperatureEmpty size={18}/>
              <p>Feels like : {feels_like.toFixed()}°</p>
            </div>
        </div>
        <div className="weather__details weather__city">
          <p>{name}, <strong>{country}</strong></p>
        </div>
    </div>
  )
}

export default Details