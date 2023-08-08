// src/components/box.jsx

// Import necessary components and styles
import React from 'react'; // Import React (not used directly, but implied by JSX)
import '../css/box-with-bg.css'; // Import CSS styles for the Box component
import '../css/error-alert.css'; // Import CSS styles for the ErrorAlert component

import LoadingSpinner from "./loading-spinner"; // Import the LoadingSpinner component
import BoxContentHeader from './box-content/box-content-header'; // Import the BoxContentHeader component
import BoxContentDataMain from './box-content/box-content-data-main'; // Import the BoxContentDataMain component
import BoxContentHeaderWithInput from './box-content/box-content-header-with-input'; // Import the BoxContentHeaderWithInput component
import { useCityStore } from '../store/cityStore'; // Import the custom hook useCityStore from the cityStore module

// Box component definition
const Box = ({ backgroundImage, data, handleSearchButtonClick }) => {
  const { isLoading } = useCityStore(); // Destructure the isLoading state variable from useCityStore()

  // Inline styling for the box background image
  const boxStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    // Main container for the Box component
    <div className="box-with-bg" style={boxStyle}>
      <div className='box-contentbox'>
        {/* Conditional rendering based on isLoading state */}
        {isLoading ? (
          // Display the LoadingSpinner component when isLoading is true
          <LoadingSpinner />
        ) : (
          // Render various Box content components when isLoading is false
          <>
            <BoxContentHeader // if isSearchingCity === true in useCityStore() we display this 
              handleSearchButtonClick={handleSearchButtonClick}
              data={data}
            />
            <BoxContentHeaderWithInput // if isSearchingCity === false in useCityStore() we display this 
              handleSearchButtonClick={handleSearchButtonClick}
            /> 
            <BoxContentDataMain // if data is empty returns null  
              data={data} 
            />  
          </>
        )}
      </div>
    </div>
  );
};

// Export the Box component for use in other parts of the application
export default Box;