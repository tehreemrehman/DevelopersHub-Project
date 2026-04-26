import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to DevelopersHub</h1>

      <p className="home-subtitle">
        We build modern websites and digital solutions
      </p>

      <div className="home-buttons">
        <Link to="/services">
          <button className="home-button">View Services</button>
        </Link>

        <Link to="/contact">
          <button className="home-button">Contact Us</button>
        </Link>

        <Link to="/booking">
          <button className="home-button">Book Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;