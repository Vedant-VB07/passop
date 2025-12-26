import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
        
        {/* Dark overlay for readability */}
        <div className="min-h-screen bg-black/80">
          <Navbar />

          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/manage" element={<Manager />} />
          </Routes>

          <Footer />
        </div>

      </div>
    </Router>
  );
}


export default App;
