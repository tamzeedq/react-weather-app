import React from 'react'

const WeatherCard = ({city}) => {
  return (
    <div className='card'>
        <h3>{city.name}, {city.sys.country}</h3>
        <h5>{city.main.temp}C</h5>
        <h5>{city.weather[0].description}</h5>
        <button className='btn'>View more</button>
    </div>
  )
}

export default WeatherCard