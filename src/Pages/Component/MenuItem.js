import React from "react";
import "../baseStyle.css"
import {Link} from 'react-router-dom'
import "../home.style.css"
import "./menuItemStyle.css"

function MenuItem() {
    return (
        <div className="navBar" style={{marginTop:"0"}}>
            <div/>
            <div className="name" style={{width:"80%"}}>
                <h1>Jonah Tjandra</h1>
                <div className="nav">
                    <h2><Link to="/" class='navLink'>Home</Link></h2>
                    <h2><Link to="/experiences" class='navLink'>Experience</Link></h2>
                    <h2><Link to="/classes" class='navLink'>Class</Link></h2>
                    <h2><Link to="/projects" class='navLink'>Project</Link></h2>
                </div>
            </div>
            <div/>
        </div>
    )
}

export default MenuItem;