import WeatherCard from "./WeatherCard"

const WeatherCards = ({ cities }) => {
  return (
    <div className='container'>
        {cities.map((city) => (<WeatherCard city={city}/>))}
    </div>
  )
}

export default WeatherCards