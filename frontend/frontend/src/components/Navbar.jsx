import { Link, NavLink } from "react-router-dom";
import logo from "../assets/developersHub_corporation_logo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <h2 className="logo">DevelepersHub</h2> */}
      <img src={logo} alt="Logo" className="logo"/>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/admin-login">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;