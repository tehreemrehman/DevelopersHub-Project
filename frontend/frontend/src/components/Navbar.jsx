import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">Agency<span>Pro</span></h2>

      <div className={`links ${open ? "active-menu" : ""}`}>

        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        <NavLink to="/booking" onClick={() => setOpen(false)}>Booking</NavLink>
        <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
        <NavLink to="/inquiry" onClick={() => setOpen(false)}>Inquiry</NavLink>

        <NavLink to="/admin-login" className="admin-btn" onClick={() => setOpen(false)}>
          Admin Login
        </NavLink>

      </div>

      <div className="menu" onClick={() => setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
}

export default Navbar;