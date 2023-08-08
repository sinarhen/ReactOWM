// Import necessary components and functions
import React from 'react';
import { useCityStore } from "../../store/cityStore"; // Import the custom hook useCityStore from the cityStore module
import BeautifulInput from "../beautiful-input"; // Import the BeautifulInput component
import { isEmpty } from "lodash"; // Import the isEmpty function from lodash library

// BoxContentHeaderWithInput component definition
const BoxContentHeaderWithInput = ({ handleSearchButtonClick }) => {
    // Destructure necessary state variables and functions from useCityStore()
    const {
        isLoading,
        currentCityName,
        setCurrentCityName,
        isSearchingCity,
        toggleIsSearchingCity,
        cities
    } = useCityStore();

    // If not currently searching for a city, render nothing
    if (!isSearchingCity) {
        return null;
    }
    
    return (
        <div className='box-header'>
            <div className='box-header-content'>
                { !isEmpty(cities) ? (
                    // If cities are not empty, render "Cancel" link to stop searching
                    <p onClick={toggleIsSearchingCity} className="search-another-city">Cancel</p>
                ) : (
                    // If cities are empty, provide instructions to search
                    <p>Try to search something :)</p>
                )}
                {/* Render BeautifulInput component with appropriate props */}
                <BeautifulInput 
                    isLoading={isLoading} 
                    placeholder="Enter a city..."
                    value={currentCityName}
                    handleInputChange={(e) => {setCurrentCityName(e.target.value)}}
                    handleButtonClick={handleSearchButtonClick} 
                />
            </div>
        </div>
    );
}

// Export the BoxContentHeaderWithInput component for use in other parts of the application
export default BoxContentHeaderWithInput;