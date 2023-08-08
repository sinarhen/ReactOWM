import { useCityStore } from "../../store/cityStore";
import BeautifulInput from "../beautiful-input";
import { isEmpty } from "lodash";

const BoxContentHeaderWithInput = ({ handleSearchButtonClick }) => {
    const {isLoading, currentCityName, setCurrentCityName, isSearchingCity, toggleIsSearchingCity, cities} = useCityStore();
    if (!isSearchingCity){
        return null
    }
    
    return (
        <div className='box-content-header'>
            <div className='box-header-content'>
                { !isEmpty(cities) ? <p onClick={toggleIsSearchingCity} className="search-another-city">Cancel</p> : ''}
                <BeautifulInput 
                    isLoading={isLoading} 
                    placeholder="Enter a city..."
                    value={currentCityName}
                    handleInputChange={(e) => {setCurrentCityName(e.target.value)}}
                    handleButtonClick={handleSearchButtonClick} 
                />
            </div>
        </div>
    )
}

export default BoxContentHeaderWithInput;