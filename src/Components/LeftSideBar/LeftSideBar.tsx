import React from 'react'
import "./LeftSideBar.css"
import { NavLink } from 'react-router-dom'
export default function LeftSideBar() {
        const slideInStyle = {
          transform: "translateX(0%)",
        };
      
        const slideOutStyle = {
          transform: "translateX(-100%)",
        };
    return (
        <div className="left-sidebar" style= {slideInStyle}>
            <nav className="side-nav my-3">
                <button className="nav-btn">
                    <NavLink to="/" className="side-nav-links" activeclassname="active">
                        <p>Home</p>
                    </NavLink>
                </button>
                <div className="side-nav-div">
                    <div>
                        <p>PUBLIC</p>
                    </div>
                    <button className="nav-btn">
                        <NavLink
                            to="/Questions"
                            className="side-nav-links"
                            activeclassname="active"
                        >
                           <i className="bi bi-globe-americas"></i>
                            <p style={{ paddingLeft: "10px" }}> Questions </p>
                        </NavLink>
                    </button>
                    <button className="nav-btn">
                        <NavLink
                            to="/Tags"
                            className="side-nav-links"
                            activeclassname="active"
                            style={{ paddingLeft: "40px" }}
                        >
                            <p>Tags</p>
                        </NavLink>
                    </button>
                    <button className="nav-btn">
                        <NavLink
                            to="/Users"
                            className="side-nav-links"
                            activeclassname="active"
                            style={{ paddingLeft: "40px" }}
                        >
                            <p>Users</p>
                        </NavLink>
                    </button>
            </div>
            </nav>
            
        </div>
    )
}
