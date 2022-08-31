import WeatherCard from "./WeatherCard"

// Contain all weather cards
const WeatherCardsContainer = ({ cities }) => {
  return (
    <div className='container'>
        {cities.map((city) => (<WeatherCard city={city}/>))} 
    </div>
  )
}

export default WeatherCardsContainer