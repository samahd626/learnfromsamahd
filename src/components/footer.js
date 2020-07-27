import React from 'react'
import '../styles/grid.css'

const Newfooter = () => {
    return(
        <div style={{marginTop: '50px' }}>
        <div className="box3">
        <h1>Author</h1>
        <div>I'm Samahd, I write on this site to help developers like you. I don't display ads, sponsored posts and the likes on my Digital garden for max user experience. Support what I do:
        <div className="row">
          <a target="_blank" rel="noreferrer" href="https://Ko-fi.com/samahd" style={{textDecoration: 'none', boxShadow: 'none'}}><div className="box1">Buy me a coffee</div></a>
          <a target="_blank" rel="noreferrer" href="https://patreon.com/samahd" style={{textDecoration: 'none', boxShadow: 'none'}}><div className="box2">Become a patreon</div> </a>
          </div>
        </div>
    </div>
        
            </div>
    )
}

export default Newfooter;


