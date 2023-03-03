import React from 'react'
import {UilSearch, UilLocationPoint} from "@iconscout/react-unicons"
import './Inputs.css'

function Inputs() {
  return (
    <div className="inputs">
        <input type="text" placeholder='Search for places...' />

        <UilSearch size={20} className="icons"/>
        <UilLocationPoint size={20} className="icons"/>
    </div>
  )
}

export default Inputs