import AddCity from "./AddCity"

const Header = ({ showSearch }) => {
  return (
    <div className='header'>
      <h1>Quazi Forecast</h1>
      <AddCity />
    </div>
  )
}

export default Header