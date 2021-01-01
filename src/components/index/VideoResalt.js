import React from "react"
const vidEmbed = "https://www.youtube.com/embed/"
const vidProp =
  "?autoplay=1&autohide=2&&start=00&border=0&wmode=opaque&enablejsapi=1&rel=0&controls=1&showinfo=1"
export const MainPlayer = ({ vidId }) => (
  <div
    className="p-5 youtube-player img-thumbnail category-tile embed-responsive embed-responsive-16by9 img-fluid w-100 "
    style={{
      maxWidth: "1200px",
      margin: "auto",
      borderRadius: "1.25rem",
    }}
  >
    <iframe
      src={vidEmbed + vidId + vidProp}
      title="Aggu The Little Wizard"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      data-related="0"
      style={{
        maxWidth: "1200px",

        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  </div>
)
