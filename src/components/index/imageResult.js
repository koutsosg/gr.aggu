import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MainImage = ({ onClick }) => {
  const thumb = useStaticQuery(
    graphql`
      query {
        mainImg: file(relativePath: { eq: "mainImg.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 673, quality: 72) {
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
    <button
      className="img-thumbnail category-tile embed-responsive embed-responsive-16by9 img-fluid w-100"
      onClick={onClick}
      style={{
        margin: "auto",
        objectFit: "contain",
        maxWidth: "1200px",
        width: "1200px",
        maxHeight: "673px",
        borderRadius: "1.25rem",
      }}
    >
      <div
        style={{
          margin: "auto",
          objectFit: "contain",
        }}
      >
        <Img
          className="category-tile"
          fluid={thumb.mainImg.childImageSharp.fluid}
          alt={"Aggu " + +" thumbnail"}
          style={{
            objectFit: "contain",
            bottom: "-100%",

            left: 0,
            margin: "auto",
            maxWidth: "1200px",
            maxHeight: "673px",
            position: "absolute",
            right: 0,
            top: "-100%",
          }}
        />
        <div
          style={{
            height: "72px",
            width: "72px",
            left: "50%",
            top: "50%",
            marginLeft: "-36px",
            marginTop: "-36px",
            position: "absolute",
            background: "url('/pbutton.png') no-repeat",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </button>
  )
}

export default MainImage
