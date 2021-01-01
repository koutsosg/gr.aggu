import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const SocialButtons = styled.button`
  position: fixed;
  top: 25vh;
  right: 2vh;
  z-index: 99;
  outline: none;
  cursor: pointer;
  padding: 1vh 1vh 1vh 5vh;
  border: none;
  background-color: transparent;
  border-radius: 100%;
`

const ContactImg = styled(Img)`
  object-fit: contain;
  bottom: -100%;
  top: -100%;
  position: absolute;
  left: 0;
  margin: auto;
  max-width: 800px;
  height: auto;
  right: 0;
  border-radius: 50%;
`
const ContactSection = () => {
  const icon = useStaticQuery(
    graphql`
      query {
        ytIcon: file(relativePath: { eq: "yticon.png" }) {
          childImageSharp {
            fluid(maxWidth: 50, maxHeight: 50, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          publicURL
        }
        fbIcon: file(relativePath: { eq: "fbicon.png" }) {
          childImageSharp {
            fluid(maxWidth: 50, maxHeight: 50, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          publicURL
        }
        igIcon: file(relativePath: { eq: "igicon.png" }) {
          childImageSharp {
            fluid(maxWidth: 50, maxHeight: 50, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          publicURL
        }
        mailIcon: file(relativePath: { eq: "mailicon.png" }) {
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
    <div>
      <SocialButtons
        style={{
          top: "20vh",
        }}
      >
        <a
          href="https://www.youtube.com/channel/UCL2uSUlDuokoNRae9rPLrAw"
          name="Youtube Link"
          title="Subscribe Aggu The Little Wizards Channel"
          target="_blank"
          style={{ color: "#fcff00" }}
          rel="noreferrer"
        >
          <ContactImg
            fluid={icon.ytIcon.childImageSharp.fluid}
            alt="icon"
            style={{
              position: "absolute",
            }}
            className="ytBut"
          ></ContactImg>
        </a>
      </SocialButtons>
      <SocialButtons
        style={{
          top: "30vh",
        }}
      >
        <a
          href="https://www.facebook.com/aggu.wizard/"
          name="Facebook Link"
          title="Like Aggu On Facebook"
          target="_blank"
          style={{ color: "#fcff00" }}
          rel="noreferrer"
        >
          <ContactImg
            fluid={icon.fbIcon.childImageSharp.fluid}
            alt="icon"
            style={{
              position: "absolute",
            }}
            className="fbBut"
          ></ContactImg>
        </a>
      </SocialButtons>
      <SocialButtons
        style={{
          top: "40vh",
        }}
      >
        <a
          href="https://www.instagram.com/aggu_thelittlewizard/"
          name="Instagram Link"
          target="_blank"
          style={{ color: "#fcff00" }}
          rel="noreferrer"
          title="Follow Aggu on Instagram"
        >
          <ContactImg
            fluid={icon.igIcon.childImageSharp.fluid}
            alt="icon"
            style={{
              position: "absolute",
            }}
            className="igBut"
          ></ContactImg>
        </a>
      </SocialButtons>
      <SocialButtons
        style={{
          top: "50vh",
        }}
      >
        <a
          href="mailto:info@agguthelittlewizard.com?subject=I Want to Contact Aggu"
          title="Contact Aggu The Little Wizard"
        >
          <ContactImg
            fluid={icon.mailIcon.childImageSharp.fluid}
            alt="icon"
            style={{
              position: "absolute",
            }}
            className="mailBut"
          ></ContactImg>
        </a>
      </SocialButtons>
    </div>
  )
}

export default ContactSection
