import React from "react"
import Navbar from "./Navbar/Navbar"

const Header404 = () => {
  return (
    <div
      Tag="section"
      backgroundColor={`#040e18`}
      style={{
        height: "56vh",

        transition: "0.3s background ease",
        background: "url('/404.png') no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
    </div>
  )
}

export default Header404
