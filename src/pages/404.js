import React from "react"
import { graphql } from "gatsby"
import Header404 from "../components/header404"
import SEO from "../components/seo"
import ContactSection from "../components/contact"
import Footer from "../components/footer"
import ScrollTop from "../components/scrollbutton"
import ImgMenu from "../components/imgMenu"
const NotFoundPage = ({ data, location }) => {
  /*   const siteTitle = data.site.siteMetadata.title */

  return (
    <div className="text-center top">
      <SEO
        title="404: Not Found"
        description="How you got here is a mystery. But you can click one of the Links
          below ."
        featuredImage={`https://agguthelittlewizard.com${data.errorImg.publicURL}`}
      />
      <Header404 />
      <div className="linear" style={{ paddingBottom: `5vh` }}>
        <h1 style={{ fontSize: `10vw` }}>404</h1>
        <h2 style={{ fontSize: `4vw` }}>Page Not Found</h2>
        <p style={{ fontSize: `3vw`, marginLeft: `10%`, marginRight: `10%` }}>
          How you got here is a mystery. But you can click one of the Links
          below .
        </p>
        <ImgMenu />
      </div>
      <Footer />
      <ScrollTop />
      <ContactSection />
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    errorImg: file(relativePath: { eq: "404og.png" }) {
      publicURL
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
