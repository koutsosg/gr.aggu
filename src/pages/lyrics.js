import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
const LyricHead = styled.header`
  text-indent: 50px;

  letter-spacing: 2px;
  margin-left: 10%;
  margin-right: 10%;
`

const songIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="All Nursery Rhymes"
          description="Sing with me and all the party animals in this musical journey!"
          featuredImage={`https://agguthelittlewizard.com${data.lyricog.publicURL}`}
        />

        <p>
          No Lyrics found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        siteUrl={`${data.site.siteMetadata?.siteUrl}/lyrics`}
        title="All Nursery Rhymes"
        description="Sing with me and all the party animals in this musical journey!"
        featuredImage={`https://agguthelittlewizard.com${data.lyricog.publicURL}`}
      />
      <div className="linear">
        <LyricHead className="py-5">
          <h1>Nursery Rhymes</h1>
          <p>Sing with me and all the party animals in this musical journey!</p>
        </LyricHead>

        <div className="row" style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-5"
                key={post.fields.slug}
              >
                <div className="category-tile bordrud">
                  <Link
                    to={`/lyric${post.fields.slug}`}
                    itemProp="url"
                    title="click to hear the song"
                  >
                    <Img
                      fluid={post.frontmatter.videoThumb.childImageSharp.fluid}
                      alt={`Aggu ${title} thumbnail`}
                      className="img-fluid bordrud"
                    />
                    <span style={{ fontSize: "1em" }}>{title}</span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default songIndex

export const pageQuery = graphql`
  query {
    lyricog: file(relativePath: { eq: "lyricog.jpg" }) {
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
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          videoThumb: vThumb {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 338, quality: 72) {
                ...GatsbyImageSharpFluid_withWebp
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
            publicURL
          }
        }
      }
    }
  }
`
