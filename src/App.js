import WeatherCardsContainer from "./components/WeatherCardsContainer";
import { useState } from 'react'

function App() {
  const key = 'dd99753319442fd41dc9129e472d226f' // Api Key
  //const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${key}&units=metric`

  const [searchCity, setSearchCity] = useState('') // current city in search bar
  const [cities, setCities] = useState([]) // saves all cities that have been searched
  
  // Fetch weather api
  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${key}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setCities([...cities, result])
          console.log(result);
        });
    }
  }

  return (
    <div>
      <div className='header'>
        <h1>Quazi Forecast</h1>
        <input type='text' placeholder='Search City' value={searchCity} 
        onChange={(e) => setSearchCity(e.target.value)} onKeyPress={search}></input>
      </div>
      <WeatherCardsContainer cities={cities}/>
    </div>
  );
}

export default App;
