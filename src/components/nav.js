import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'

const Navbar = () => {
    return(
        <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand" href="/">Navbar</a>
            <div className="form-inline">
           
                <a className="nav-link" href="/">Home </a>
         
 
            </div>
</nav>
</div>
    )
}

export default Navbar;