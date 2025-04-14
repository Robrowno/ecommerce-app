import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#212b36",
        color: "white",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bottom-0">
        <p>© 2025 CmdCtrl. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <Link to="/about" className="hover:underline text-gray-300">
            About
          </Link>
          <Link to="/contact" className="hover:underline text-gray-300">
            Support
          </Link>
          <Link to="/policies" className="hover:underline text-gray-300">
            Policies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
