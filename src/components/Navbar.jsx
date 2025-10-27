import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition"
        >
          PhoneClient
        </Link>

        {/* Nav Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "hover:text-cyan-300 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/phones"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "hover:text-cyan-300 transition"
            }
          >
            Phones
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
