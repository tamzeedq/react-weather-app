import Header from "./components/Header";
import WeatherCards from "./components/WeatherCards";
import { useState } from 'react'

function App() {
  const [showAddSearch, setShowAddSearch] = useState(false)
  const [cities, setCities] = useState([
    { location: 'Vancouver',
      temperature: '25C',
      description: 'Sunny'},
    { location: 'Surrey',
      temperature: '20C',
      description: 'Sun & Clouds'},
    { location: 'Victoria',
      temperature: '18C',
      description: 'Cloudy'}
  ]) 
  
  return (
    <div className="">
      <Header/>
      <WeatherCards cities={cities}/>
    </div>
  );
}

export default App;
