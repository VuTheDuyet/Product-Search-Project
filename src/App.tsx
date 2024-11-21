import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductSearch from "./components/ProductSearch";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Product Search App</h1>
        <Routes>
          <Route path="/products" element={<ProductSearch />} />
          <Route path="/products/search" element={<ProductSearch />} />
          <Route path="/" element={<ProductSearch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
