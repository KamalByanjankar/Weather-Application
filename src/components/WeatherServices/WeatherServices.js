import { DateTime } from "luxon"

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5" 

const fetchWeather = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, "appid": API_KEY });

  return fetch(url).then((res) => res.json());
};

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
  } = data;

  const {description, icon} = weather[0]

  return{
    lat, lon, temp, temp_max, temp_min, feels_like, humidity, pressure, 
    sunrise, sunset, visibility, speed, name, dt, country, weather, description, 
    icon, timezone
  }
}

const formatdailyWeather = (data) => {
  let { timezone, daily, hourly } = data;

  daily = daily.slice(1,8).map((d) => {
    return{
      title: getLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp,
      icon: d.weather[0].icon
    }
  })

  hourly = hourly.slice(1,8).map((d) => {
    return {
      title: getLocalTime(d.dt, timezone, "HH:mm"),
      temp: d.temp,
      icon: d.weather[0].icon
    }
  })

  return { timezone, daily, hourly }
}


const getWeatherData = async (searchParams) => {

    const formattedCurrentWeather = await fetchWeather(
      "weather",
      searchParams
    ).then(formatCurrentWeather);
  
    const {lat, lon} = formattedCurrentWeather
  
    const formattedForecastWeather = await fetchWeather("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(formatdailyWeather);
  
  
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