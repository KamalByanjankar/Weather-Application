import React from 'react'
import { getIconFromUrl } from '../../WeatherServices/WeatherServices'
import '../WeeklyWeatherForecast/WeeklyWeatherForecast.css'

function HourlyWeatherForecast({items, title}) {
  return (
    <div className="weeklyWeatherForecast">
      {
        items && items.map((item, i) => {
          return(
            <div className="weeklyWeatherForecast__component" key={i}>
              <p>{item.title}</p>
              <img
                src={getIconFromUrl(item.icon)}
                className="icon"
                alt=""
              />
              <p>{item.temp.toFixed()}° </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default HourlyWeatherForecast