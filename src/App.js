// Importing CSS styles and React dependencies
import './css/App.css';
import './css/beautiful-input.css';
import './css/box-with-bg.css';
import './css/error-alert.css';
import './css/spinner.css';

// Importing custom components and hooks
import Box from './components/box';
import ErrorAlert from './components/error-alert';
import { useCityStore } from './store/cityStore';
import Heading from './components/heading';

// API Key and URL for OpenWeatherMap API
const API_KEY = "a462392098dcbde0ab5c6b79af7f31d1";
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  // Destructuring state variables and functions from custom zustand hook
  const {
    objectId,
    cities,
    currentCityName,
    setCurrentCityName,
    addCity,
    errorText,
    setErrorText,
    setIsLoading,
    toggleIsSearchingCity,
  } = useCityStore();

  // Function to convert temperature from Kelvin to Celsius
  const toCelsius = (kelvins) => (kelvins - 273.15).toFixed(1);

  // Function to scrape weather data from API response and update state
  const scrapeWeatherData = (data) => {
    try {
      // Every time we make a new city search error disappears, until we have a new one
      setErrorText(''); 

      const city = data.name;

      // Extracting weather data from API response
      const { main, description, icon } = data.weather[0];
      const { speed: windSpeed } = data.wind;
      const { all: cloudsPercentage } = data.clouds;
      const { pressure, humidity } = data.main;
      const { country: countryCode } = data.sys;

      // Converting temperature values from Kelvins to Celsius
      const temperature = toCelsius(data.main.temp);
      const minTemperature = toCelsius(data.main.temp_min);
      const maxTemperature = toCelsius(data.main.temp_max);
      const feelsLikeTemperature = toCelsius(data.main.feels_like);

      // Constructing city data object
      const cityData = {
        [city]: {
          name: city,
          objectId,
          weather: main,
          weatherDescription: description,
          temperature,
          weatherIcon: icon,
          windSpeed,
          cloudsPercentage,
          pressure,
          humidity,
          countryCode,
          minTemperature,
          maxTemperature,
          feelsLikeTemperature,
        },
      };

      // Updating state
      setCurrentCityName(city);
      addCity({ ...cityData });
    } catch (err) {
      setErrorText('Internal Error');
      console.log(err);
    }
  };

  // Function to determine if city needs to be searched in API
  const needsToBeSearched = (city_name) => !cities[city_name.toLowerCase()];

  // Function to fetch data from OpenWeatherMap API
  const fetchDataFromOWM = (city_name) => {
    try {
      setIsLoading(true);

      if (needsToBeSearched(city_name)) {
        const urlToFetch = `${API_URL}?q=${city_name}&appid=${API_KEY}`;

        // Fetching data from API
        fetch(urlToFetch)
          .then((response) => response.json())
          .then((data) => scrapeWeatherData(data))
          .catch((error) => {
            console.log(error);
            return;
          });
      }

      // Toggling search state
      toggleIsSearchingCity();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle search button click
  const handleButtonClick = () => {
    fetchDataFromOWM(currentCityName);
  };

  // Function to get the last element of an object
  const getLastElementOfAnObject = (obj) => obj[Object.keys(obj)[Object.keys(obj).length - 1]];

  // Rendering the component
  return (
    <div className='App'>
      <Heading title='Weather Application ' description='made with React by sinarhen'/>
      <Box
        backgroundImage="https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?cs=srgb&dl=pexels-pixabay-531756.jpg&fm=jpg"
        data={cities[currentCityName] ? { city: currentCityName, ...cities[currentCityName] } : getLastElementOfAnObject(cities)}
        handleSearchButtonClick={handleButtonClick}
      />
      <ErrorAlert errorText={errorText} />
    </div>
  );
}

export default App;
