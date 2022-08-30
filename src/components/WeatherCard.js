import React from 'react'

const WeatherCard = ({city}) => {
  return (
    <div className='card'>
        <h3>{city.location}</h3>
        <h5>{city.temperature}</h5>
        <h5>{city.description}</h5>
        <button className='btn'>View more</button>
    </div>
  )
}

export default WeatherCard