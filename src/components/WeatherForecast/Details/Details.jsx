import React from 'react'
import {UilTemperaturePlus, UilTemperatureMinus} from "@iconscout/react-unicons"
import './Details.css'
import { getIconFromUrl } from '../../WeatherServices/WeatherServices'

function Details({
  weather:{
      icon,
      description,
      temp_max,
      temp_min,
      name,
      country
    }
  }) {
  return (
    <div className="details">
        <hr style={{
            margin: '0 0 30px 0',
            padding: 0
        }}/>
        <div className="weather__details">
          <img
            src={getIconFromUrl(icon)}
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
        </div>
        <div className="weather__details weather__city">
          <p>{name}, <strong>{country}</strong></p>
        </div>
    </div>
  )
}

export default Details