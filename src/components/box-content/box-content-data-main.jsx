const BoxContentDataMain = ({data}) => {
    if (!data) {return null}
    return (
        <div className='box-content-content'>
          <div className='box-content-content-header'>
            <h1>
              {data.name}
            </h1>
          
          </div>
          <div className='box-content-grid'>
            <div className='grid-item'>
              <h2>
                Temperature
              </h2>
              <ul>
                <li>Current temperature is {data.temperature}°C</li>
                <li>Minimal temperature is {data.minTemperature}°C</li>
                <li>Maximal temperature is {data.maxTemperature}°C</li>
                <li>Feels like is {data.feelsLikeTemperature}°C</li>
              </ul>
            </div>
            <div className='grid-item'>
              <h2>Pressure & Humidity</h2>
              <ul>
                <li>Humidity is {data.humidity}°C</li>
                <li>Pressure is {data.pressure} Pa</li>
              
              </ul>
            </div>
            <div className='grid-item'>
              <h2>
                Clouds & Wind
              </h2>
              <ul>
                <li>Clouds percentage : {data.cloudsPercentage}%</li>
                <li>Wind speed: {data.windSpeed}m/s</li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
  

export default BoxContentDataMain;