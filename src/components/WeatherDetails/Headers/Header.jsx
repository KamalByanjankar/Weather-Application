import React, { useState } from 'react'
import './Header.css'

function Header({units, setUnits, setOptions}) {
  const [clickedUnit, setClickedUnit] = useState("metric")
  const [option, setOption] = useState("hourly")

  const handleUnitChange = (e) => {
    const unit = e.currentTarget.name;
    setClickedUnit(unit)
    if(units !== unit){
      setUnits(unit)
    }
  }

  const handlehourlyOrWeeklyChange = (e) => {
    const hourlyOrWeekly = e.currentTarget.name;
    setOption(hourlyOrWeekly)
    setOptions(hourlyOrWeekly)
  }

  return (
    <div className="header">
        <div className="dailyOrWeekly">
            <button
             name="hourly"
             onClick={handlehourlyOrWeeklyChange}
             className={option === "hourly" ? "option__select" : ""}
            >
              Today
            </button>
            <button
              name="weekly"
              onClick={handlehourlyOrWeeklyChange}
              className={option === "weekly" ? "option__select" : ""}
            >
              Week
            </button>
        </div>

        <div className="degree">
            <button
              name="metric"
              onClick={handleUnitChange}
              className={clickedUnit === "metric" ? "unit__select" : ""}
            >°C
            </button>
            <button
              name="imperial"
              onClick={handleUnitChange}
              className={clickedUnit === "imperial" ? "unit__select" : ""}
              >°F
            </button>
        </div>
    </div>
  )
}

export default Header