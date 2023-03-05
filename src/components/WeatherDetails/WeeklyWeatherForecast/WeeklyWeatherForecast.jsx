import React from 'react'
import { getLocalTime, iconUrlFromCode } from '../../WeatherServices/WeatherServices'
import './WeeklyWeatherForecast.css'

function WeeklyWeatherForecast({items}) {
    // console.log(items)
  return (
    <div className="weeklyWeatherForecast">
        {
            items && items.slice(1,8).map((item, i) => {
                return(
                    <div className="weeklyWeatherForecast__component" key={i}>
                        <p>{getLocalTime(item.dt, item.timezone, "ccc")}</p>
                        <img
                            src={iconUrlFromCode(item.weather[0].icon)}
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