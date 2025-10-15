import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
//import About from "./pages/About";
import ContactDealer from "./pages/ContactDealer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<ContactDealer />} />
      </Routes>
    </Router>
  );
}

export default App;
