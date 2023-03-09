import axios from "axios"
import { DateTime } from "luxon"

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5" 

const formatCurrentWeather = (data) => {
  const {
    coord: {lon, lat},
    main: {temp, temp_max, temp_min, feels_like, humidity, pressure},
    name,
    dt,
    sys: {country, sunrise, sunset},
    visibility,
    weather,
    wind: {speed},
    timezone
  } = data.data;

  const {description, icon} = weather[0]

  return{
    lat, lon, temp, temp_max, temp_min, feels_like, humidity, pressure, 
    sunrise, sunset, visibility, speed, name, dt, country, weather, description, 
    icon, timezone
  }
}

const formatdailyWeather = (data) => {
  let { timezone, daily } = data.data;
  return { timezone, daily }
}


const getWeatherData = async (query, units) => {

    const formattedCurrentWeather = await axios.get(BASE_URL + `/weather?q=${query}&appid=${API_KEY}&units=${units}`).then(formatCurrentWeather)
  
    const {lat, lon} = formattedCurrentWeather
  
    const formattedForecastWeather = await axios.get(BASE_URL + `/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${API_KEY}&units=${units}`).then(formatdailyWeather)
  
    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const getLocalTime = (
  secs,
  zone,
  // format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  format = "cccc, hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const getIconFromUrl = (icon) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`; 


export default getWeatherData;

export {getLocalTime, getIconFromUrl};