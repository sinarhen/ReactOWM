import { useCityStore } from "../../store/cityStore";
import LoadingSpinner from "../loading-spinner";

const BoxContentHeader = ({ data }) => {

    const {isSearchingCity, isLoading} = useCityStore()

    if (isSearchingCity) {
      return null
    }

    if (isLoading) {
      return <LoadingSpinner />
    }

    if (!data) {
      return null
    }
    
    return (
        <div className='box-content-header'>
          <div className='box-header-content'>
            <img src="https://openweathermap.org/img/wn/09d@2x.png" alt=""/>
            <div className='box-header-city'>
              <CityHeader city={data.name} temperature={data.temperature}/>
            </div>
            <p>
              feels like {data.feelsLikeTemperature}°C 
            </p>
          </div>
        </div>
    )
  };

const CityHeader = ({city, temperature}) => {
    const {toggleIsSearchingCity} = useCityStore();
    return (
        <>
        <h1 className='city'>
            {city} | {temperature}°C 
        </h1>
        <p onClick={toggleIsSearchingCity} className='search-another-city'>Search another city</p>
        </>
    )
};

export default BoxContentHeader;