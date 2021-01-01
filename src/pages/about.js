import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import ImgMenu from "../components/imgMenu"
import SEO from "../components/seo"
const IndexHead = styled.header`
  letter-spacing: 2px;
`

const ContactSection = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        siteUrl={`${data.site.siteMetadata?.siteUrl}/about`}
        title="About Aggu"
        featuredImage={`https://agguthelittlewizard.com${data.mainog.publicURL}`}
      />
      <IndexHead className="py-3 px-3">
        <div className="mw-30">
          <h1 className="text-center ">
            <span
              style={{ color: "#66ff00", textShadow: "1px 1px 1px #000000" }}
            >
              A
            </span>
            <span
              style={{ color: "#ff63ca", textShadow: "1px 1px 1px #000000" }}
            >
              G
            </span>
            <span
              style={{ color: "#6699ff", textShadow: "1px 1px 1px #000000" }}
            >
              G
            </span>
            <span style={{ color: "#fc0", textShadow: "1px 1px 1px #000000" }}>
              U{" "}
            </span>
            <span
              style={{
                textΤransform: "capitalize",
                color: "red",
                textShadow: "1px 1px 1px #000000",
              }}
            >
              - The Little Wizard
            </span>
          </h1>
          <p>
            At
            <span>
              <span
                style={{ color: "#66ff00", textShadow: "1px 1px 1px #000000" }}
              >
                {" "}
                A
              </span>
              <span
                style={{ color: "#ff63ca", textShadow: "1px 1px 1px #000000" }}
              >
                G
              </span>
              <span
                style={{ color: "#6699ff", textShadow: "1px 1px 1px #000000" }}
              >
                G
              </span>
              <span
                style={{ color: "#fc0", textShadow: "1px 1px 1px #000000" }}
              >
                U{" "}
              </span>
              <span
                style={{
                  textΤransform: "capitalize",
                  color: "red",
                  textShadow: "1px 1px 1px #000000",
                }}
              >
                The Little Wizard&nbsp;
              </span>
            </span>
            &nbsp;we encourage pre-school kids to learn through singing and
            playing, by providing enjoyable nursery rhymes with beautiful
            animation. Our team of educators has created some of the most
            popular children’s songs that entertain and also teach kids about
            the ABCs, numbers, shapes, colors, and more. Our little ones learn
            to focus and play as well as shape family and friendship values.
          </p>
        </div>
      </IndexHead>
      <div className="text-center">
        <ImgMenu />
      </div>
    </Layout>
  )
}

export default ContactSection
export const pageQuery = graphql`
  query {
    mainog: file(relativePath: { eq: "mainog.png" }) {
      publicURL
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
