import React from "react"

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Aggu = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "aggu_stance3.png" }) {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300, quality: 72) {
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
    <Img
      style={{ marginLeft: "auto", marginRight: "auto", zIndex: "-1" }}
      fluid={data.file.childImageSharp.fluid}
      alt="Aggu the little Wizard"
    />
  )
}
export default Aggu
