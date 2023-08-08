// src/components/beautiful-input.jsx

// Import necessary components and styles
import React from 'react';
import { BsSearch } from "react-icons/bs"; // Import the BsSearch icon from react-icons library
import '../css/beautiful-input.css'; // Import CSS styles for the BeautifulInput component

// BeautifulInput component definition
const BeautifulInput = ({
  placeholder,
  isLoading,
  value,
  handleInputChange,
  handleButtonClick
}) => {
  return (
    <div className="beautiful-input-container">
      {/* Input field */}
      <input
        disabled={isLoading} // Disable input field when isLoading is true
        type="text"
        value={value}
        className="beautiful-input"
        placeholder={placeholder}
        onChange={handleInputChange}
      />

      {/* Search button */}
      <div
        disabled={isLoading} // Disable button when isLoading is true
        onClick={handleButtonClick}
        className='beautiful-input-button'
      >
        <BsSearch size={30} className='search-button'/> {/* Search icon */}
      </div>
    </div>
  );
};

export default BeautifulInput;
