import React from "react"
import { Link } from "gatsby"
import Footer from './footer'




import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h6
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h6>
    )
  } else {
    header = (
      <h6
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
         
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
           
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h6>
    )
  }
  return (
 <div>
 

    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(45),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >

     
      <header><h2>Latest posts</h2></header>
      <main>{children}</main>
      <footer style={{paddingTop: 100}}>
        <Footer />
        © {new Date().getFullYear()} | Built by
        {` `}
        🚀Samahd
      </footer>
    </div>
    </div>
   
  )
}

export default Layout
