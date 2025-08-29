// components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-indigo-600">MyStore</h1>
      <ul className="md:flex gap-6 text-gray-700 hidden">
        <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
        <li><a href="#products" className="hover:text-indigo-600">Products</a></li>
        <li><a href="#testimonials" className="hover:text-indigo-600">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
