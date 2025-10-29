import Aboutme from "./Aboutme/Aboutme.jsx";
import Projects from "./Projects/Projects.jsx"
import Contact from "./Contact/Contact.jsx";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './Layout.css'
import Home from "./Home/Home.jsx";

function App() {

    return (

        <BrowserRouter>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">Über mich</Link>
                    <Link to="/projects">Projekte</Link>
                    <Link to="/contact">Kontakt</Link>
                </nav>
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
