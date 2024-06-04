import React from "react"
import airbnb from "./assets/airbnb.svg"
import "./navbar.css"


function Navbar() {
  return (
    <nav>
      <div className = "navbar">
        <img src={airbnb} alt=""/>
      </div>
    </nav>
  )
}

export default Navbar
