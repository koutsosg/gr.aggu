import React from "react"
import Img from "gatsby-image"
const ColPage = ({ cThumb, title, lineArt, colId }) => (
  <div
    style={{
      margin: "auto",
      objectFit: "contain",
      maxWidth: "600px",
    }}
  >
    <a
      id={colId}
      href={lineArt}
      title="Click to Download the Coloring page"
      download
    >
      <Img
        style={{
          margin: "auto",
          objectFit: "none !important",
          maxWidth: "600px",
          borderRadius: "1.25rem",
        }}
        className={"img-thumbnail category-tile"}
        fluid={cThumb}
        title="Click to download"
        alt={"Aggu " + title + " coloring page thumbnail"}
      />
    </a>
  </div>
)

export default ColPage
