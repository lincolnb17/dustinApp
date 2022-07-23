
import './App.css';
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import { Routes, Route} from "react-router-dom";
import Services from './pages/services/Services';
import Contact from "./pages/contact/Contact"

function App() {
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

    </Routes>

  )}

export default App;
