import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Notfound from "./Notfound"
import NavbarFooter from "./NavbarFooter"


function App() {
    return (

            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NavbarFooter/>} />
                <Route path="*" element={<Notfound/>} />
            </Routes>
      
    )
}

export default App