import React from "react";

import Mainpage from "./pages/mainpage/Mainpage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dasboard";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import Order from "./components/order/Homepage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Mainpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
