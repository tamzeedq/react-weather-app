
const WeatherCardSimple = ({ city }) => {
  return (
    <div className='simple'>
      <h3>{city.name}, {city.sys.country}</h3>
      <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} 
      alt={city.weather[0].description}></img>
      <p>
        <b>{city.weather[0].description}</b> <br></br>
        Temp: {city.main.temp}°C <br></br>
        Feels Like: {city.main.feels_like}°C <br></br> 
        Wind: {city.wind.speed}km/h  
      </p>
    </div>
  )
}

export default WeatherCardSimple