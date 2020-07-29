import React from 'react' 

import { Link } from 'gatsby'
import '../styles/main.css'

const Navbar = () => {
    return(
        <div className="topnav" style={{postion : 'sticky'}}>
            
            <Link to="/"><img src="img/nerdexelogo.png" alt="NerdExe" width="60" /></Link>
             
            <Link to="../pages/404" className='float-right'>Articles</Link>
            <Link to="../pages/404" className='float-right'>Contact me</Link>   
            <Link to="../pages/404" className='float-right'>About Me</Link>

            
        </div>
    )
}

export default Navbar;