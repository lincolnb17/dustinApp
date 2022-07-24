import Home from "./pages/home/Home"
import About from "./pages/about/About"
import { Routes, Route} from "react-router-dom";
import Services from './pages/services/Services';
import Contact from "./pages/contact/Contact"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup";
import Shop from "./pages/shop/Shop"

function App() {
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />

    </Routes>

  )}

export default App;
