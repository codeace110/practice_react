import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Notfound from "./Notfound"



function App() {
    return (
        <div className="App">
            <nav className="navbar container  navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
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
                    <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">about</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Dropdown link
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Notfound/>} />
            </Routes>
        </div>
    )
}

export default App