import React from "react"
import Navbar from "./Navbar/Navbar"

const Header = () => {
  return (
    <div
      Tag="section"
      backgroundColor={`#040e18`}
      style={{
        height: "56vh",

        transition: "0.3s background ease",
        background: "url('/long_bg.png') no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
    </div>
  )
}

export default Header
