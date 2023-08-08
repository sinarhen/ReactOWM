import { BsSearch } from "react-icons/bs";
import '../css/beautiful-input.css';

const BeautifulInput = ({ placeholder, isLoading, value, handleInputChange, handleButtonClick }) => {
    return (
        <div className="beautiful-input-container">
            <input
              disabled={isLoading}
              type="text"
              value={value}
              className="beautiful-input"
              placeholder={placeholder}
              onChange={handleInputChange}
            />
  
            <div disabled={isLoading}  onClick={handleButtonClick} className='beautiful-input-button'>
              <BsSearch size={30} className='search-button'/>
            </div>
        </div>
        
    );
  };

export default BeautifulInput;