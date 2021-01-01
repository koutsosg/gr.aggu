import React from "react"
const Video = ({ videoSrcURL, title }) => (
  <div
    className="youtube-player img-thumbnail category-tile embed-responsive embed-responsive-16by9 img-fluid w-100 "
    style={{
      maxWidth: "700px",
      maxHeight: "395px",
      margin: "auto",
      borderRadius: "1.25rem",
    }}
  >
    <iframe
      src={
        "https://www.youtube.com/embed/" +
        videoSrcURL +
        "?autoplay=1&autohide=2&&start=00&border=0&wmode=opaque&enablejsapi=1&rel=0&controls=1&showinfo=1"
      }
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      data-related="0"
      style={{
        maxWidth: "800px",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  </div>
)
export default Video

/* <iframe width="632" height="356" src="https://www.youtube.com/embed/IDtcD_6QZ2o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="590" height="332" src="https://www.youtube.com/embed/3aE7U6GYTj8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
