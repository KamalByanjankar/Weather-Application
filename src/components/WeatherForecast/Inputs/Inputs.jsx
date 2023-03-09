import React, {useState} from 'react'
import {UilSearch, UilLocationPoint} from "@iconscout/react-unicons"
import './Inputs.css'

function Inputs({ setQuery }) {
  const [ city, setCity ] = useState("")

  const handleSearchClick = () => {
    if(city !== ""){
      setQuery(city)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setQuery(city)
  }

  return (
    <div className="inputs">
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          placeholder='Search for places...' 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>


        <UilSearch 
          size={20} 
          className="icons"
          onClick={handleSearchClick}
        />
        <UilLocationPoint size={20} className="icons"/>
    </div>
  )
}

export default Inputs