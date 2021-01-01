// Logo.js
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 280px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 280px;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "aggu-logo" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 280, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Aggu the little Wizard logo"
      />
    </LogoWrap>
  )
}

export default Logo
