import React from 'react'
import './Header.css'

function Header({units, setUnits}) {

  const handleUnitChange = (e) => {
    const unit = e.currentTarget.name;
    if(units !== unit){
      setUnits(unit)
    }
  }

  return (
    <div className="header">
        <div className="dailyOrWeekly">
            <p>Today</p>
            <p>Week</p>
        </div>

        <div className="degree">
            <button
              name="metric"
              onClick={handleUnitChange}
            >°C
            </button>
            <button
              name="imperial"
              onClick={handleUnitChange}
              >°F
            </button>
        </div>
    </div>
  )
}

export default Header