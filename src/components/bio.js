/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/nerdexelogo.png/" }) {
        childImageSharp {
          fixed(width: 170, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div style={{backgroundColor: '#1b1d25', color: 'white',}}>
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(45),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        display: `flex`,
       
      }}
    >
      
    <p><h1>Hello! My name is {author.name}. I'm a Software Engineer</h1>
        Developed by <strong>{author.name}</strong>: {author.summary}
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          paddingBottom: 10,
          width: 500,
          height: 500,
          borderRadius: `10px`,
        }}
        imgStyle={{
          borderRadius: `10px`,
        }}
      />
    </div>
    </div>
  )
}

export default Bio
