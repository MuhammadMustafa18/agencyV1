import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from './Pages/ContactPage';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="font-primary">
        <Navbar /> {/* ✅ Always visible on all pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
        <Footer /> {/* ✅ Always visible on all pages */}
      </div>
    </Router>
  );
}

export default App
