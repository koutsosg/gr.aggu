import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { MainPlayer } from "../components/index/VideoResalt"
import { mainVid } from "../components/api"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ImgMenu from "../components/imgMenu"
import MainImage from "../components/index/imageResult"

const LyricHead = styled.header`
  letter-spacing: 2px;
  margin-left: 10%;
  margin-right: 10%;
`

const AgguIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [vidId, setVidID] = useState()
  const [videoVisible, setVideoVisible] = useState(false)
  const onToggleVideoVisible = () => setVideoVisible(prev => !prev)
  useEffect(() => {
    mainVid("UCL2uSUlDuokoNRae9rPLrAw")
      .then(r => r.json())

      .then(({ items }) =>
        setVidID(items[0].link.substr(items[0].link.indexOf("=") + 1))
      )
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        siteUrl={`${data.site.siteMetadata?.siteUrl}`}
        title="Nursery Rhymes"
        featuredImage={`https://agguthelittlewizard.com${data.mainog.publicURL}`}
      />
      <div className="p-3">
        <LyricHead>
          <h1 className="text-center">Stay Tuned</h1>
        </LyricHead>
        {!videoVisible ? (
          <MainImage onClick={onToggleVideoVisible} />
        ) : (
          <MainPlayer vidId={vidId} />
        )}
        <ImgMenu />
      </div>
    </Layout>
  )
}

export default AgguIndex

export const pageQuery = graphql`
  query {
    mainog: file(relativePath: { eq: "mainog.png" }) {
      publicURL
    }
    sitePage {
      path
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
      }
    }
  }
`
