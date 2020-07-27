/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import '../styles/responsive.css'

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/samahd.JPG/" }) {
        childImageSharp {
          fixed(width: 500, height: 500) {
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
    <div style={{ color: '#1b1d25', background: '#ee990078 ', marginTop: '0px'}}>
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(45),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        display: `flex`,
       
      }}
    >
      
    <p><h1>Hello! My name is <font color="purple">{author.name}</font>. I'm a Software Engineer</h1>
    <h4 style={{ fontFamily:'sans-serif', paddingRight: '20px' }}><b>{author.summary}</b></h4>
       
    
        <h4 style={{ fontFamily:'sans-serif', paddingRight: '50px' }}><b>This website is my digital garden—a compendium of
         the things I have learned over the years, my projects, and<br /> anything else I want to write about.</b></h4>
        <a href={`https://facebook.com/${social.twitter}`}>
          You can follow my page on Facebook
        </a>
      </p>
      <Image
        className='hide'
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          paddingBottom: 10,
          width: 800,
          height: 500,
          borderRadius: `10px`,
        }}
        imgStyle={{
          borderRadius: `10px`,
          width: 500,
          height: 500,
        }}
      />
    </div>
    </div>
  )
}

export default Bio
