// src/store/cityStore.js

import create from 'zustand'; // Import the create function from the zustand library

// Create and export the useCityStore custom hook using Zustand
export const useCityStore = create((set) => ({
    cities: {}, // Object to store city data
    currentCityName: '', // Currently selected city name
    isLoading: false, // Loading indicator
    errorText: '', // Error message
    isSearchingCity: true, // Indicator for searching a city
    objectId: 0, // Unique identifier for each city data entry
    
    // Function to increment the objectId
    incrObjectId: () => set(state => ({objectId: state.objectId + 1})),

    // Function to add city data to the store
    addCity: (data) => set((state) => {
        state.incrObjectId();
        return {
            cities: {...state.cities, ...data}
        };
    }),
    
    // Function to set the current city name
    setCurrentCityName: (value) => set((state) => {
        return {currentCityName: value};
    }),
    
    // Function to set the loading state
    setIsLoading: (bool) => set((state) => {
        return {isLoading: bool};
    }),
    
    // Function to set the error text
    setErrorText: (errorText) => set(state => {
        return {errorText};
    }),
    
    // Function to toggle the searching city state
    toggleIsSearchingCity: () => set(state => {
        return {isSearchingCity: !state.isSearchingCity};
    }) 
}));
