import React from 'react'
import './WeeklyWeatherForecast.css'

function WeeklyWeatherForecast() {
    // console.log(items)
  return (
    <div className="weeklyWeatherForecast">
        {/* {
            items && items.map((item, i) => {
                return(
                    <div className="weeklyWeatherForecast__component" key={i}>
                        <p>{item.title}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            className="icon"
                            alt=""
                            />
                        <p>{item.temp.max.toFixed()}° <span className="min_temp">{item.temp.min.toFixed()}°</span></p>
                    </div>
                )
            })
        } */}
    </div>
  )
}

export default WeeklyWeatherForecast