import React from "react"

import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const FooterS = styled.footer`
  color: #fcd224;
  background-color: #993287;
  border-top: 5px solid #fcff00;
  min-height: 87px;
  text-align: center;
  text-shadow: none;
`

const NavItem2 = styled(Link)`
  text-shadow: 1px 1px 1px #000000;
  text-decoration: none;
  font-family: balooregular;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 1.5rem;
  padding: 0 2vh 0 2vh;
`
const Footer = () => {
  /* const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "aggu_stance3.png" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
      }
    `
  ) */
  return (
    <FooterS>
      <footer>
        <nav>
          <NavItem2 to="/" className="aColor">
            Home
          </NavItem2>
          <NavItem2 to="/lyrics" className="bColor">
            Songs
          </NavItem2>
          <NavItem2 to="/colorings" className="cColor">
            Downloads
          </NavItem2>
          <NavItem2 to="/about" className="dColor">
            About
          </NavItem2>
        </nav>
      </footer>
      <hr></hr>
      <div>
        <a
          href="https://www.facebook.com/aggu.wizard/"
          name="Facebook"
          title="Like Us On Facebook"
          style={{ color: "#fcff00" }}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook Link"
        >
          <FontAwesomeIcon className="cColor" size="2x" icon={faFacebook} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCL2uSUlDuokoNRae9rPLrAw"
          name="Youtube"
          title="Subscribe Our Channel"
          target="_blank"
          style={{ color: "red" }}
          rel="noreferrer"
          aria-label="Youtube Link"
        >
          <FontAwesomeIcon className="mx-1 eColor" size="2x" icon={faYoutube} />
        </a>
        <a
          href="https://www.instagram.com/aggu_thelittlewizard/"
          title="Contact Aggu"
          name="Instagram"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram Link"
        >
          <FontAwesomeIcon
            className="mx-1 bColor"
            size="2x"
            icon={faInstagram}
          />
        </a>
      </div>
      © {new Date().getFullYear()}, Spell Group. All Rights Reserved
    </FooterS>
  )
}

export default Footer
