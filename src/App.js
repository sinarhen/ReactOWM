import './css/App.css';
import './css/beautiful-input.css';
import './css/box-with-bg.css';
import './css/error-alert.css';
import './css/spinner.css'

import { useState } from 'react';

import BeautifulInput from './components/beautiful-input';
import Box from './components/box';
import ErrorAlert from './components/error-alert';
import { useCityStore } from './store/cityStore';

const API = "a462392098dcbde0ab5c6b79af7f31d1"
const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=' + API + "&" // ?q={city name}&appid={API key}';

function App() {
  const {
    objectId,
    cities, 
    currentCityName, 
    setCurrentCityName, 
    addCity, 
    errorText, 
    setErrorText, 
    isLoading, 
    setIsLoading,
    toggleIsSearchingCity
  } = useCityStore()

  // Caching functionality:  
  // {
  //   cities: {
  //     kyiv: {*info*},
  //     new_york: {*info}
  //   }
  // }

  const toCelsius = (kelvins) => {
    return (kelvins - 273.15).toFixed(1)
  }

  const scrapeWeatherData = (data) => {
    try{
      setErrorText('')
      
      const city = data.name;
      
      // Weather Data
      const weather = data.weather[0].main;
      const weatherDescription = data.weather[0].description;
      const weatherIcon = data.weather[0].icon;

      // Wind Data
      const windSpeed = data.wind.speed

      // Clouds Data 
      const cloudsPercentage = data.clouds.all

      // Pressure and Humidity
      const pressure = data.main.pressure
      const humidity = data.main.humidity

      // Country Code
      const countryCode = data.sys.country
      
      // Temperature Data
      const temperature = toCelsius(data.main.temp);
      const minTemperature = toCelsius(data.main.temp_min);
      const maxTemperature = toCelsius(data.main.temp_max);
      const feelsLikeTemperature = toCelsius(data.main.feels_like);
      
      const cityData = {
        [city]: {
          name: city,
          objectId,
          weather,
          weatherDescription,
          temperature,
          weatherIcon,
          windSpeed,
          cloudsPercentage,
          pressure,
          humidity,
          countryCode,
          minTemperature,
          maxTemperature,
          feelsLikeTemperature,
        },
      }
      setCurrentCityName(city)

      addCity({...cityData});
    } catch (err){  
      setErrorText('Something went wrong')
      console.log(err)
    }
  
  };
  const needsToBeSearched = (city_name) => {
    return (!cities[city_name.toLowerCase()])
  }

  const fetchDataFromOWM = (city_name) => {
    try {
      setIsLoading(true)
      console.log('loading')
      if (needsToBeSearched(city_name)) {
        const urlToFetch = URL + 'q=' + city_name;
        console.log(urlToFetch)
        fetch(urlToFetch)
        .then(response => response.json())
        .then(data => scrapeWeatherData(data))
        .catch(error => {
          console.log(error)
          return
        })   
      }
      toggleIsSearchingCity()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
      console.log(isLoading)
      console.log('loaded')
    }

  };
  const handleButtonClick = () => {

    fetchDataFromOWM(currentCityName)
  };

  const getLastElementOfAnObject = (obj) => {
    const lastElement = obj[Object.keys(obj)[Object.keys(obj).length - 1]]
    return lastElement
  }

  console.log(cities)
  return (
    <div className='App'>
      <Box
        backgroundImage="https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?cs=srgb&dl=pexels-pixabay-531756.jpg&fm=jpg"
        data={cities[currentCityName] ? {city: currentCityName ,...cities[currentCityName]} : getLastElementOfAnObject(cities)}  
        handleSearchButtonClick={handleButtonClick}
      /> 
   
      
        
      <ErrorAlert errorText={errorText}/>
    </div>
);
}






export default App;