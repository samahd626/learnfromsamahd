import React, {useEffect} from "react"
import { Link, graphql } from "gatsby"


import Bio from "../components/bio"
import Navbar from "../components/nav"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const facebookAppId = "105714164327614"
export function CustomerChat(){
  useEffect(()=>{
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml            : true,
        version          : 'v7.0'
      });
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  })
  return(
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id={facebookAppId}
      />
    </>
  )
}


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
    <Navbar />
    <Bio />

    <Layout location={location} title={siteTitle} >
      
      <SEO title="All posts" description="I'm Samahd, I write on this site to help developers like you. I don't display ads, sponsored posts and the likes on my Digital garden for max user experience."/>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
              <small style={{fontSize: '15px', fontWeight: 'lighter', color: 'grey'}}>{node.frontmatter.date}</small><br />
                <Link style={{ boxShadow: `none`, }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
            </header>
            {/* <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section> */}
      <hr style={{width:"50%"}} />

          </article>
        )
      })}
    </Layout>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
