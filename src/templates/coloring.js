import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"
import styled from "styled-components"
import ImgMenu from "../components/imgMenu"

const ColorHead = styled.header`
  text-indent: 50px;
  letter-spacing: 2px;
  margin-left: 10%;
  margin-right: 10%;
`

const ColoringTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        siteUrl={`${data.site.siteMetadata?.siteUrl}/coloring${post.fields.slug}`}
        title={post.frontmatter.title + " coloring"}
        description={`Download the drawing of ${post.frontmatter.title}`}
        featuredImage={`https://agguthelittlewizard.com${post.frontmatter.coloringThumbOg.publicURL}`}
      />
      <ColorHead>
        <h1 id={post.frontmatter.colId} itemProp="headline">
          Click the page to Download
        </h1>
      </ColorHead>
      <div
        className="p-3"
        style={{
          margin: "auto",
          objectFit: "contain",
          maxWidth: "1200px",
        }}
      >
        <a
          href={post.frontmatter.coloringThumb.publicURL}
          title="Click to Download the Coloring page"
          download
        >
          <Img
            style={{
              margin: "auto",
              objectFit: "none !important",
              maxWidth: "1200px",
              borderRadius: "1.25rem",
            }}
            className={"img-thumbnail category-tile bordrud"}
            fluid={post.frontmatter.coloringThumb.childImageSharp.fluid}
            title="Click to download"
            alt={"Aggu " + post.frontmatter.title + " coloring page thumbnail"}
          />
        </a>
      </div>
      <h3 className="text-center py-3">
        More <Link to="/colorings">Colorings</Link>
      </h3>
      <hr />
      <footer></footer>
      <nav className="lyrics-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {next && (
              <Link
                style={{
                  fontFamily: `balooregular`,
                  color: `#fcff00`,
                  fontSize: `1.4rem`,
                }}
                to={`/coloring${next.fields.slug}`}
                rel="next"
              >
                <FontAwesomeIcon icon={faArrowLeft} /> {next.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link
                style={{
                  fontFamily: `balooregular`,
                  color: `#fcff00`,
                  fontSize: `1.4rem`,
                }}
                to={`/coloring${previous.fields.slug}`}
                rel="prev"
              >
                {previous.frontmatter.title}{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <footer></footer>
      <ImgMenu />
    </Layout>
  )
}

export default ColoringTemplate

export const pageQuery = graphql`
  query BlogPostBySlug2(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    sitePage {
      path
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        title
        colId
        date(formatString: "MMMM DD, YYYY")
        coloringThumb: cThumb {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 848, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          publicURL
        }
        coloringThumbOg: cThumbOg {
          publicURL
        }
        videoSrcURL
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
