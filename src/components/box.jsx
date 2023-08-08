

import { useState } from 'react';
import '../css/box-with-bg.css';
import '../css/error-alert.css';

import LoadingSpinner from "./loading-spinner";
import BoxContentHeader from './box-content/box-content-header';
import BoxContentDataMain from './box-content/box-content-data-main';
import BoxContentHeaderWithInput from './box-content/box-content-header-with-input';
import { useCityStore } from '../store/cityStore';


const Box = ({ backgroundImage, data, handleSearchButtonClick }) => {
    const boxStyle = {
      backgroundImage: `url(${backgroundImage})`
    };

    const {isLoading} = useCityStore();

    return (
      <div className="box-with-bg" style={boxStyle}>
        <div className='box-contentbox'>

          { isLoading ? <LoadingSpinner/> : <>
              <BoxContentHeader handleSearchButtonClick={handleSearchButtonClick} data={data}/>
              <BoxContentHeaderWithInput handleSearchButtonClick={handleSearchButtonClick}/>
              <BoxContentDataMain data={data}/>
            </>
          }

        </div>

      </div>
    );
  };

  
export default Box;