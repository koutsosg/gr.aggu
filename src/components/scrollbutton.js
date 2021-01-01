import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ButtonTop = styled.button`
  position: fixed;
  bottom: 5vh;
  right: 3.5vh;
  z-index: 99;
  outline: none;
  cursor: pointer;
  padding-top: 4vh;
  padding-bottom: 2vh;
  padding-left: 1vh;
  padding-right: 5vh;
  border: none;
  border-radius: 100%;
  font-size: 18px;
  background-color: transparent;

  :hover {
    box-shadow: 0px 0px 20px 24px #ffff03;
    transition: all 0.6s ease-in;
  }
`
const ScrollTop = () => {
  const topbut = useStaticQuery(
    graphql`
      query {
        totop: file(relativePath: { eq: "wandButton.png" }) {
          childImageSharp {
            fluid(maxWidth: 50, maxHeight: 50, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          publicURL
        }
      }
    `
  )

  return (
    <ButtonTop className="ytBut" onClick={() => scrollTo(".top")}>
      <Img
        fluid={topbut.totop.childImageSharp.fluid}
        style={{
          objectFit: "contain",
          bottom: "-100%",
          left: 0,
          margin: "auto",
          maxWidth: "800px",
          height: "auto",
          position: "absolute",
          right: 0,
          top: "-100%",
          inset: "0% 0px",
        }}
        alt="To the top"
      />
    </ButtonTop>
  )
}

export default ScrollTop
