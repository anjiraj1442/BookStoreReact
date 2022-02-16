import React from "react";

import Mainpage from "./pages/mainpage/Mainpage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dasboard";
import Cart from "./pages/cart/Cart";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Mainpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />           
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
