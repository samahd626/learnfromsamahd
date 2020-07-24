import React from 'react'
import Image from "gatsby-image"

import { Link } from 'gatsby'
import '../styles/main.css'

const Navbar = () => {
    return(
        <div className="topnav" style={{postion : 'sticky'}}>
<Image
        fixed="../styles/nerdexelogo.png"
        alt="logo"
        style={{
          
        }}
        imgStyle={{
          
        }}
      />
            <Link to="/">NerdExe</Link>
             <div className='float-right'>
            <Link to="../pages/404">Articles</Link>
            <Link to="../pages/404">About Me</Link>
            <Link to="../pages/404">Contact</Link>          
            </div>
        </div>
    )
}

export default Navbar;