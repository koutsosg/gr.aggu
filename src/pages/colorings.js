import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ColPage from "../components/colpage"
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
        <SEO title="All Coloring Pages" />

        <p>
          No Coloring pages found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        siteUrl={`${data.site.siteMetadata?.siteUrl}/colorings`}
        title="All Coloring Pages"
        description="Download and print a coloring page for every Nursery Rhyme."
        featuredImage={`https://agguthelittlewizard.com${data.coloringog.publicURL}`}
      />
      <div className="linear">
        <LyricHead className="py-5">
          <h1>Coloring Pages</h1>
          <p>Download and print a coloring page for every Nursery Rhyme.</p>
        </LyricHead>

        <div className="row" style={{ listStyle: `none` }}>
          {posts.map(post => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-5"
                key={post.fields.slug}
              >
                <div className="category-tile bordrud">
                  <Link
                    to={`/coloring${post.fields.slug}`}
                    itemProp="url"
                    title="click to download the page"
                  >
                    <ColPage
                      title={post.frontmatter.title}
                      cThumb={
                        post.frontmatter.coloringThumb.childImageSharp.fluid
                      }
                      colId={post.frontmatter.colId}
                    />
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
    coloringog: file(relativePath: { eq: "coloringog.png" }) {
      publicURL
    }

    site {
      siteMetadata {
        title
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

          colId
          coloringThumb: cThumb {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 424, quality: 72) {
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
