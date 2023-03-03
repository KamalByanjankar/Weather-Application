import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
        <div className="dailyOrWeekly">
            <p>Today</p>
            <p>Week</p>
        </div>

        <div className="degree">
            <button>°C</button>
            <button>°F</button>
        </div>
    </div>
  )
}

export default Header