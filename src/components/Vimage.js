import React from "react"
import Img from "gatsby-image"

const Vimage = ({ onClick, vThumb, title }) => {
  return (
    <button
      className="img-thumbnail category-tile embed-responsive embed-responsive-16by9 img-fluid w-100"
      onClick={onClick}
      style={{
        margin: "auto",
        objectFit: "contain",
        maxWidth: "700px",
        maxHeight: "395px",

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
          fluid={vThumb}
          alt={"Aggu " + title + " thumbnail"}
          style={{
            objectFit: "contain",
            bottom: "-100%",

            left: 0,
            margin: "auto",
            maxWidth: "700px",
            maxHeight: "395px",
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

export default Vimage
