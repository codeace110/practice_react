import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom"
function Navbar() {
    const pages = ['Home', 'About', 'Contact'];
    const [currentPage, setCurrentPage] = useState('Home');

    useEffect(() => {
        // Update the current page in the component state when the user navigates to a different page
        const currentPath = window.location.pathname;
        const page = pages.find((page) => `/${page.toLowerCase()}` === currentPath);
        setCurrentPage(page);
    }, [pages]);
    return (
        <div>
            <nav className="navbar bg-info flex-row navbar-expand-lg navbar-dark">

                <div className="mx-5 collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {pages.map((page) => (
                            <li className='nav-item ms-4 p-3' key={page}>
                                <a href={`/${page.toLowerCase()}`} className={page === currentPage ? 'fw-bold text-white' : ''} style={{textDecorationLine: "none",color:"black"}}>
                                    {page}
                                </a>
                            </li>
                        ))}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>

        </div>)
}
export default Navbar

