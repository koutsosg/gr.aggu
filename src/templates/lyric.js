import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Vimage from "../components/Vimage"
import Video from "../components/vplayer"
import ColPage from "../components/colpage"
import styled from "styled-components"
/* import MainPlayer from "../components/mainvid" */
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const LyricHead = styled.header`
  text-indent: 50px;
  letter-spacing: 2px;
  margin-left: 10%;
  margin-right: 10%;
`

const LyricTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const [videoVisible, setVideoVisible] = useState(false)

  const onToggleVideoVisible = () => setVideoVisible(prev => !prev)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        siteUrl={`${data.site.siteMetadata?.siteUrl}/lyric${post.fields.slug}`}
        title={post.frontmatter.title + " lyrics"}
        description={post.frontmatter.description || post.excerpt}
        featuredImage={`https://agguthelittlewizard.com${post.frontmatter.videoThumbOg.publicURL}`}
      />
      <LyricHead>
        <h1 itemProp="headline">{post.frontmatter.title}</h1>

        <p> {post.frontmatter.description}</p>
      </LyricHead>

      <div className="row">
        <div className="col-lg-6 col-md-6 p-3">
          <div className="">
            {!videoVisible ? (
              <Vimage
                onClick={onToggleVideoVisible}
                vThumb={post.frontmatter.videoThumb.childImageSharp.fluid}
                title={post.frontmatter.title}
              />
            ) : (
              <Video
                videoSrcURL={post.frontmatter.videoSrcURL}
                title={post.frontmatter.title}
              />
            )}
          </div>
          <div className="mt-5">
            <h2 className="text-center">Download our coloring Page</h2>
            <ColPage
              lineArt={post.frontmatter.coloringThumb.publicURL}
              title={post.frontmatter.title}
              cThumb={post.frontmatter.coloringThumb.childImageSharp.fluid}
            />
          </div>
          <h3 className="text-center py-3">
            More <Link to="/colorings">Colorings</Link>
          </h3>
        </div>
        <div
          className="col-lg-6 col-md-6 poem"
          style={{
            overflow: `auto`,

            letterSpacing: `2px`,
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        ></div>
      </div>
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
                to={`/lyric${next.fields.slug}`}
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
                to={`/lyric${previous.fields.slug}`}
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
    </Layout>
  )
}

export default LyricTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
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
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description

        videoThumb: vThumb {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 395, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        coloringThumb: cThumb {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 424, quality: 72) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
          publicURL
        }
        videoThumbOg: vThumbOg {
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
