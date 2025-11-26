import Aboutme from "./Aboutme/Aboutme.jsx";
import Projects from "./Projects/Projects.jsx"
import Contact from "./Contact/Contact.jsx";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './Layout.css'
import Home from "./Home/Home.jsx";

function App() {
    function closeBurger() {
        const nav = document.querySelector(".nav-links");
        nav.classList.remove("active");
    }

    return (

        <BrowserRouter basename="/Portfolio">
            <header>
                <nav className="nav-links">
                    <Link to="/" onClick={closeBurger}>Home</Link>
                    <Link to="/aboutme" onClick={closeBurger}>Über mich</Link>
                    <Link to="/projects" onClick={closeBurger}>Projekte</Link>
                    <Link to="/contact" onClick={closeBurger}>Kontakt</Link>
                </nav>

                <div className="burger" onClick={() => {
                    document.querySelector(".nav-links").classList.toggle("active");
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/aboutme" element={<Aboutme/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </main>
            <footer>
                <span> © 2025 - Sebastian Willmann</span>
            </footer>
        </BrowserRouter>


    )
        ;
}

export default App
