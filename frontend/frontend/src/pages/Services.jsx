import { useEffect, useState } from "react";
import "./Services.css";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        
        <div className="services-grid">
        {services.length === 0 ? (
        <p>No services found</p>
      ) : (
        services.map((service) => (
          <div className="service-card"  key={service._id}>
          <h3 className="service-title"  key={service._title}></h3>
          <p className="service-desc"  key={service._description}></p>
          <p className="service-price"  key={service._price}></p>
      </div>
        )) 
         )} 
      </div>
      </div>
    </div>
  );
}

export default Services;