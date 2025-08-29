// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-indigo-600  text-white text-center py-6 mt-12">
      <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
