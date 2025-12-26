import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-green-500/20 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center shadow-lg shadow-green-500/10">
      
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 blur-xl"></div>

      {/* Logo */}
      <div className="relative text-xl sm:text-2xl font-bold tracking-wide cursor-pointer group whitespace-nowrap">
        <span className="text-green-500 group-hover:text-green-400 transition duration-300">
          {"<"}
        </span>
        <span className="text-green-400 group-hover:text-green-300 transition duration-300">
          Pass
        </span>
        <span className="text-white group-hover:text-green-300 transition duration-300">
          OP
        </span>
        <span className="text-green-500 group-hover:text-green-400 transition duration-300">
          {"/>"}
        </span>

        {/* Logo underline */}
        <div className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 group-hover:w-full transition-all duration-300"></div>

        {/* Glow on hover */}
        <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 blur-lg bg-green-500/20 transition duration-300 -z-10"></div>
      </div>

      {/* Menu */}
      <ul className="flex gap-4 sm:gap-8 text-sm sm:text-lg">
        
        {/* Home */}
        <li className="relative cursor-pointer group text-green-400">
          <Link to="/home" className="relative z-10">
            Home
          </Link>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 blur-md bg-green-500/10 transition duration-300 -z-10"></span>
        </li>

        {/* Manage */}
        <li className="relative cursor-pointer group text-green-400">
          <Link to="/manage" className="relative z-10">
            Manage
          </Link>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 blur-md bg-green-500/10 transition duration-300 -z-10"></span>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
 