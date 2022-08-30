import React from 'react'

const AddCity = ({text}) => {
  return (
    <div className='addCity'>
      <input type='text' placeholder='Search City'></input>
      <button className='btn'>{text}</button>
    </div>
  )
}

AddCity.defaultProps = {
    text: 'Add City'
}

export default AddCity