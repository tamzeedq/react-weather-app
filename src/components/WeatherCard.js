import WeatherCardSimple from './WeatherCardSimple'
import WeatherCardExtra from './WeatherCardExtra'
import { useState } from 'react'

const WeatherCard = ({city}) => {

  //Boolean to pick which type of card to show
  const [showSimple, setShowSimple] = useState(true)
  
  //Text changes for button
  const [buttonText, setButtonText] = useState('View More')

  const update = () => {
    setShowSimple(!showSimple)
    {!showSimple ?
      setButtonText('View More') :
      setButtonText('^')}
  }

  return (
    <div className='card'>
        {showSimple ?
        <WeatherCardSimple city={city}/> :
        <WeatherCardExtra/>}
        <button className='btn' onClick={update}>{buttonText}</button>
    </div>
  )
}

export default WeatherCard