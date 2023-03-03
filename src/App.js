import { useState, useEffect } from 'react';
import './App.css';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import WeatherForecast from './components/WeatherForecast/WeatherForecast'
import getFormattedWeatherData from './components/WeatherServices/WeatherServices';

function App() {

  const [query, setQuery] = useState("lisbon");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData(query).then((data) => {

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query]);

  console.log("The weather is ", weather)

  return (
    <div className="app">
      {
        weather && (
          <>
            <WeatherForecast weather={weather}/>
            <WeatherDetails />
          </>
        )
      }
    </div>
  );
}

export default App;