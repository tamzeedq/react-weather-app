import WeatherCards from "./components/WeatherCards";
import { useState } from 'react'

function App() {
  const key = 'dd99753319442fd41dc9129e472d226f'
  //const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${key}&units=metric`

  const [searchCity, setSearchCity] = useState('')
  const [cities, setCities] = useState([]) 
  
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
      <WeatherCards cities={cities}/>
    </div>
  );
}

export default App;
