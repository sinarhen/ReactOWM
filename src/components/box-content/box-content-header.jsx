// src/components/box-content/box-content-header.jsx

// Import necessary components and styles
import React from 'react';
import { useCityStore } from "../../store/cityStore"; // Import the custom hook useCityStore from the cityStore module
import LoadingSpinner from "../loading-spinner"; // Import the LoadingSpinner component

// BoxContentHeader component definition
const BoxContentHeader = ({ data }) => {
    // Destructure isSearchingCity and isLoading from useCityStore()
    const { isSearchingCity, isLoading } = useCityStore();

    // If currently searching for a city, render nothing
    if (isSearchingCity) {
        return null;
    }

    // If loading data, display the LoadingSpinner
    if (isLoading) {
        return <LoadingSpinner />;
    }

    // If no data is provided, render nothing
    if (!data) {
        return null;
    }

    // If data is available, render the header content
    return (
        <div className='box-header'>
            <div className='box-header-content'>
                <img src="https://openweathermap.org/img/wn/09d@2x.png" alt=""/>
                <div className='box-header-city'>
                    <CityHeader city={data.name} temperature={data.temperature} />
                </div>
                <p>
                    feels like {data.feelsLikeTemperature}°C 
                </p>
            </div>
        </div>
    );
};

// CityHeader component definition
const CityHeader = ({ city, temperature }) => {
    const { toggleIsSearchingCity } = useCityStore(); // Destructure toggleIsSearchingCity from useCityStore()

    // Render the city name and temperature, along with a "Search another city" link
    return (
        <>
            <h1 className='city'>
                {city} | {temperature}°C 
            </h1>
            <p onClick={toggleIsSearchingCity} className='search-another-city'>Search another city</p>
        </>
    );
};

// Export the BoxContentHeader component for use in other parts of the application
export default BoxContentHeader;