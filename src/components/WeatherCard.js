import WeatherCardSimple from './WeatherCardSimple'
import WeatherCardExtra from './WeatherCardExtra'
import { useState } from 'react'

const WeatherCard = ({city}) => {
  
  //Boolean to pick which type of card to show
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