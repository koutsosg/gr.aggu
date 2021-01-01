import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const LinkSpan = styled.span`
  text-shadow: 1px 1px 1px #000000;
  text-decoration: none;
  font-family: balooregular;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  padding: 0 2vh 0 2vh;
`

const ContactImg2 = styled(Img)`
  margin: auto;
  position: absolute;
  min-width: 15vw;
  width: 15vw;
`
const ImgMenu = () => {
  const icon = useStaticQuery(
    graphql`
      query {
        jazzy: file(relativePath: { eq: "jazzy.png" }) {
          childImageSharp {
            fluid(maxWidth: 280, maxHeight: 280, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          publicURL
        }
        aggubw: file(relativePath: { eq: "aggubw.png" }) {
          childImageSharp {
            fluid(maxWidth: 280, maxHeight: 280, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          publicURL
        }
        farmer: file(relativePath: { eq: "farmer.png" }) {
          childImageSharp {
            fluid(maxWidth: 280, maxHeight: 280, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          publicURL
        }
        aggucl: file(relativePath: { eq: "aggucl.png" }) {
          childImageSharp {
            fluid(maxWidth: 280, maxHeight: 280, quality: 72) {
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
    <div className="text-center py-5 row">
      <Link
        to="/lyrics"
        className="bColor px-4 col-lg-3 col-md-3 col-sm-6"
        style={{ display: "inline-block" }}
        title="Visit Lyrics Pages"
      >
        <LinkSpan>Learn The Lyrics</LinkSpan>
        <ContactImg2
          fluid={icon.jazzy.childImageSharp.fluid}
          alt="Jazzy image"
          className=""
        ></ContactImg2>
      </Link>
      <Link
        to="/colorings"
        className="cColor aggubw px-4 col-lg-3 col-md-3 col-sm-6"
        style={{ display: "inline-block" }}
        title="Visit The Coloring Pages"
      >
        <LinkSpan> Play With Colors </LinkSpan>
        <ContactImg2
          fluid={icon.aggubw.childImageSharp.fluid}
          alt="Black and White Aggu"
          className=""
        ></ContactImg2>
      </Link>
      <Link
        to="https://www.youtube.com/channel/UCL2uSUlDuokoNRae9rPLrAw"
        className="eColor px-4 col-lg-3 col-md-3 col-sm-6"
        style={{ display: "inline-block" }}
        title="Visit our Youtube Channel"
      >
        <LinkSpan>Visit Our Channel</LinkSpan>
        <ContactImg2
          fluid={icon.farmer.childImageSharp.fluid}
          alt="old McDonald"
          className=""
        ></ContactImg2>
      </Link>
      <Link
        to="/about"
        className="dColor px-4 col-lg-3 col-md-3 col-sm-6"
        style={{ display: "inline-block" }}
        title="Who is Aggu"
      >
        <LinkSpan>Who is Aggu?</LinkSpan>
        <ContactImg2
          fluid={icon.aggucl.childImageSharp.fluid}
          alt="Aggu image"
          className=""
        ></ContactImg2>
      </Link>
    </div>
  )
}

export default ImgMenu
