import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./productPage";
import PricePage from "./pricePAge";
import FormPage from "./formPage";
import ContactPage from "./contactPage";


const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4">
          <div className="flex justify-between items-center container mx-auto">
            <h1 className="text-xl font-bold">Saudi Store</h1>
            <ul className="flex space-x-6">
            
              <li>
                <Link to="/" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/price" className="hover:underline">
                  Price
                </Link>
              </li>
              <li>
                <Link to="/form" className="hover:underline">
                  Form
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/price" element={<PricePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const HomePage = () => (
  <div>
    <h2 className="text-2xl font-bold">Welcome to Saudi Store</h2>
    <p className="mt-2">Explore our amazing product collections and offers!</p>
  </div>
);

export default App;
