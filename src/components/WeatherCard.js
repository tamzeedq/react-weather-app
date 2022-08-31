import React from 'react'

const WeatherCard = ({city}) => {
  return (
    <div className='card'>
        <h3>{city.name}, {city.sys.country}</h3>
        <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}></img>
        <h5>{city.main.temp}°C</h5>
        <h5>{city.weather[0].description}</h5>
        <button className='btn'>View more</button>
    </div>
  )
}

export default WeatherCard