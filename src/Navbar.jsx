import React from 'react';
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div>
            <nav className="navbar bg-info flex-row navbar-expand-lg navbar-dark">

                <div className="mx-5 collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
  
        </div>)
}
export default Navbar

