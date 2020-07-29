import React from 'react'
import Image from "gatsby-image"

import { Link } from 'gatsby'
import '../styles/main.css'

const Navbar = () => {
    return(
        <div className="topnav" style={{postion : 'sticky'}}>
             <Image
        
        fixed= {{ regex: "/nerdexelogo.png/" }}
        
                alt="logo"
                style={{
                  
                  width: 50,
                  height: 50,
                  borderRadius: `10px`,
                }}
                imgStyle={{
                  borderRadius: `10px`,
                  width: 50,
                  height: 50,
                }}
              />
            <Link to="/">NerdExe</Link>
             
            <Link to="../pages/404" className='float-right'>Articles</Link>
            <Link to="../pages/404" className='float-right'>Contact me</Link>   
            <Link to="../pages/404" className='float-right'>About Me</Link>

            
        </div>
    )
}

export default Navbar;