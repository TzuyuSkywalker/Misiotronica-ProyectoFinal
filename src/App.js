import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contacto from "./Pages/Contacto";
import Home from "./Pages/Home";
import Ventas from "./Pages/Ventas";
import NotFound from "./Pages/NotFound";
import SobreNosotros from "./Pages/SobreNosotros";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Ventas" element={<Ventas />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;