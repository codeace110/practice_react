import { React, useState, useEffect } from 'react';

function Navbar() {
    const pages = ['Home', 'About', 'Contact'];
    const [currentPage, setCurrentPage] = useState('Home');

    useEffect(() => {
        const currentPath = window.location.pathname;
        const page = pages.find((page) => `/${page.toLowerCase()}` === currentPath);
        setCurrentPage(page);
    }, [pages]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info  ">
                
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

                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
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

