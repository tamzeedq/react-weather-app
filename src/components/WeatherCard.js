import WeatherCardSimple from './WeatherCardSimple'
import WeatherCardExtra from './WeatherCardExtra'
import { useState } from 'react'

const WeatherCard = ({city}) => {
  const [showSimple, setShowSimple] = useState(true)
  return (
    <div className='card'>
        {showSimple ?
        <WeatherCardSimple city={city}/> :
        <WeatherCardExtra/>}
        <button className='btn' onClick={() => setShowSimple(!showSimple)}>View more</button>
    </div>
  )
}

export default WeatherCard