import AddCity from "./AddCity"
import { useState } from 'react'

const Header = ({ showSearch, setCities}) => {
  const [city, setCity] = useState('')
  const key = 'dd99753319442fd41dc9129e472d226f'

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setCities([...setCities, ])
          console.log(result);
        });
    }
  }

  return (
    <div className='header'>
      <h1>Quazi Forecast</h1>
      <input type='text' placeholder='Search City' value={city} 
      onChange={(e) => setCity(e.target.value)} onKeyPress={search}></input>
      {/* <AddCity /> */}
    </div>
  )
}

export default Header