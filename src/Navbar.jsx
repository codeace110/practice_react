import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom"
// <<<<<<< HEAD:src/NavbarFooter.jsx
// function NavbarFooter() {
// =======
function Navbar() {
    const pages = ['Home', 'About', 'Contact'];
    const [currentPage, setCurrentPage] = useState('Home');

    useEffect(() => {
        // Update the current page in the component state when the user navigates to a different page
        const currentPath = window.location.pathname;
        const page = pages.find((page) => `/${page.toLowerCase()}` === currentPath);
        setCurrentPage(page);
    }, [pages]);
// >>>>>>> 1f52d0331dc21f93414cb8afefc42732303dd5df:src/Navbar.jsx
    return (
        <div>
            <nav className="navbar container  navbar-expand-lg navbar-light bg-light">
                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {pages.map((page) => (
                            <li className='nav-item ms-4 p-3' key={page}>
                                <a href={`/${page.toLowerCase()}`} className={page === currentPage ? 'fw-bold rounded-pill bg-white' : ''} style={{textDecorationLine: "none",color:"black", padding:'10px'}}>
                                    {page}
                                </a>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </nav>

        </div>)
}
export default Navbar

