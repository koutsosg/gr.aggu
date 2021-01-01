// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-shadow: #001004 0px 0px 4px;
  padding: 5px;
  background-color: #9a3488;
  border-radius: 10px;
  border: 1px solid;
  text-decoration: none;
  font-family: balooregular;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  line-height: 0.9;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 1.5rem;
  :hover {
    ::after {
      width: 100%;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    ppadding: 10px 0;
    font-size: 1.8rem;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/" className="aColor">
        Home
      </NavItem>
      <NavItem to="/lyrics" className="bColor">
        Songs
      </NavItem>
      <NavItem to="/colorings" className="cColor">
        Downloads
      </NavItem>
      <NavItem to="/about" className="dColor">
        About
      </NavItem>
    </>
  )
}

export default NavbarLinks
