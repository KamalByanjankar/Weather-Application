import React from 'react'
import { getIconFromUrl } from '../../WeatherServices/WeatherServices'
import './WeeklyWeatherForecast.css'

function WeeklyWeatherForecast({items, title}) {
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
                        <p>{item.temp.max.toFixed()}° <span className="min_temp">{item.temp.min.toFixed()}°</span></p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default WeeklyWeatherForecast