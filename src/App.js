import { useState, useEffect } from 'react';
import './App.css';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import WeatherForecast from './components/WeatherForecast/WeatherForecast'
import getWeatherData from './components/WeatherServices/WeatherServices';

function App() {

  const [query, setQuery] = useState("lisbon");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getWeatherData(query, units).then((data) => {

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  // console.log("The weather is ", weather)

  return (
    <div className="app">
      {
        weather && (
          <>
            <WeatherForecast weather={weather}/>
            <WeatherDetails weather = {weather} />
          </>
        )
      }
    </div>
  );
}

export default App;