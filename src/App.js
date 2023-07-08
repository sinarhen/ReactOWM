import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {Typography, Button,  Grid} from '@mui/material';
import Search from '@mui/icons-material/Search';
import Weather from './Card';
const API = 'a462392098dcbde0ab5c6b79af7f31d1'
const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=' + API + "&" // ?q={city name}&appid={API key}';


function App() {
  const [currentValue, setCurrentValue] = useState('')
  const [cities, setCities] = useState({
    'Initial': {
      'weather': null,
      'weatherDescription': null,
      'temperature': null
    }
  })
  const [currentCity, setCurrentCity] = useState({
    name: 'Try searching for a city',
    weather: '',
    weatherDescription: '',
    temperature: ''

  })

  // Will be something like this json: 
  // {
  //   cities: {
  //     kyiv: {*info*},
  //     new_york: {*info}
  //   }
  // }
  useEffect(() => {
    console.log(currentValue);
    console.log(cities);
  }, [cities]);


  const scrapeWeatherData = (data) => {
    const city = data.name;
    const weather = data.weather[0].main;
    const weatherDescription = data.weather[0].description;
    const temperature = (parseInt(data.main.temp) - 32) / 1.8;
    
    setCities((prevState) => ({
      ...prevState,
      [city]: {
        weather,
        weatherDescription,
        temperature,
      },
    }));
  
    setCurrentCity({
      name: city,
      weather,
      weatherDescription,
      temperature
    });
  };
  const needsToBeSearched = (city_name) => {
    return (!cities[city_name])
  }
  const handleInputChange = (event) => {
    setCurrentValue(event.target.value)
  } 
  const fetchDataFromOWM = (city_name) => {
    if (needsToBeSearched(city_name)) {
      const urlToFetch = URL + 'q=' + city_name;
      console.log(urlToFetch);
      fetch(urlToFetch)
      .then(response => response.json())
      .then(data => scrapeWeatherData(data))
      .catch(error => {
        console.log(error)
        return
      })   
    }

  } 
  const handleButtonClick = () => {
    fetchDataFromOWM(currentValue)
  }
  return (
  <div className="App">
    <Typography variant='h4'>
      Weather app
    </Typography>

    <InputForm 
      onInputChange={handleInputChange}
      onButtonClick={handleButtonClick}
      currentValue={currentValue}      
    />

        <Weather
          city={currentCity.name}
          weather={currentCity.weather}
          weatherDescription={currentCity.weatherDescription}
          temperature={currentCity.temperature}
        />

  </div>
);
}

const InputForm = ({onInputChange, onButtonClick, currentValue, ...props}) => (
  <div>
      <TextField 
      label='Enter a city'
      onChange={(e) => onInputChange(e)}
      value={currentValue}
      variant="outlined"
      color="success"
      error={currentValue === ''}
      helperText={currentValue === "" ? 'Empty field!' : ' '}
      />
      <Button variant="contained" endIcon={<Search />}
        onClick={(e) => onButtonClick()}
      >
        Search
      </Button>
  </div>

) 

export default App;
// https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=a462392098dcbde0ab5c6b79af7f31d1