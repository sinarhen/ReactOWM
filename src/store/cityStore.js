import create from 'zustand';


export const useCityStore = create((set) => ({
    cities: {},
    currentCityName: '',
    isLoading: false,
    errorText: '',
    isSearchingCity: true,
    objectId: 0,
    incrObjectId: () => set(state => ({objectId: state.objectId + 1})),
    addCity: (data) => set((state) => {
        state.incrObjectId()
        return {
            cities: {...state.cities, ...data}
        }
    }),
    setCurrentCityName: (value) => set((state) => {
        return {currentCityName: value}
    }),
    setIsLoading: (bool) => set((state) => {
        return {isLoading: bool}
    }),
    setErrorText: (errorText) => set(state => {
        return {errorText}
    }),
    toggleIsSearchingCity: () => set(state => {
        return {isSearchingCity: !state.isSearchingCity}
    }) 
})
);
