import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      <section className="hero">
        <div className="hero-text">
          <h1>Build Your Digital Future With Us 🚀</h1>

          <p>
            We are a full-stack digital agency delivering high-quality websites,
            UI/UX designs, and scalable business solutions using modern
            technologies like MERN Stack.
          </p>

          <div className="buttons">
            <Link to="/services">
              <button className="btn primary">View Services</button>
            </Link>

            <Link to="/contact">
              <button className="btn">Contact Us</button>
            </Link>

            <Link to="/booking">
              <button className="btn">Book Now</button>
            </Link>
          </div>
        </div>

        <div className="hero-img">
          <img src={heroImg} alt="agency" />
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Our Agency?</h2>

        <div className="feature-boxes">
          <div className="feature-card">
            <h3>⚡ Fast Delivery</h3>
            <p>We deliver projects quickly without compromising quality.</p>
          </div>

          <div className="feature-card">
            <h3>💻 Modern Design</h3>
            <p>Clean, responsive and user-friendly designs.</p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure System</h3>
            <p>Your data and applications are fully secure.</p>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <h2>Our Expertise</h2>

        <div className="service-cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600" />
            <h3>Website Development</h3>
            <p>Professional websites for your business growth.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600" />
            <h3>UI/UX Design</h3>
            <p>Attractive and user-focused interface design.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" />
            <h3>E-commerce Solutions</h3>
            <p>Complete online store with payment integration.</p>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Let’s build something amazing together.</p>

        <Link to="/booking">
          <button className="btn primary">Get Started</button>
        </Link>
      </section>

    </div>
  );
}

export default Home;