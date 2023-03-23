import React, {useState} from 'react'
import {UilSearch, UilLocationPoint} from "@iconscout/react-unicons"
import './Inputs.css'

function Inputs({ setQuery }) {
  const [ city, setCity ] = useState("")

  const handleSearchClick = () => {
    if(city !== ""){
      setQuery({q: city})
    }
    setCity("")
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if(city !== ""){
      setQuery({q: city})
    }
    setCity("")
  }

  return (
    <div className="inputs">
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          placeholder='Search for places...' 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input__field"
        />
      </form>

      <UilSearch 
        size={20} 
        className="icons"
        onClick={handleSearchClick}
      />
      
      <UilLocationPoint 
        size={20} 
        className="icons"
      />
    </div>
  )
}

export default Inputs