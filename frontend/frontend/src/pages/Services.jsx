import { useEffect, useState } from "react";
import "./Services.css";

function Services() {
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleServiceClick = (service) => {
    setMessage(`You selected ${service.title} (Rs ${service.price})`);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="services-page">

      <h1 className="title">Our Services</h1>
      <p className="subtitle">We provide modern digital solutions</p>
      {message && <div className="toast">{message}</div>}

      <div className="grid">

        {services.length === 0 ? (
          <p>No services found</p>
        ) : (
          services.map((service) => (
            <div className="card" key={service._id}>
              <img
                src={
                  service.image
                    ? service.image
                    : service.title.toLowerCase().includes("web")
                    ? "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
                    : service.title.toLowerCase().includes("ui")
                    ? "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600"
                    : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
                }
                alt={service.title}
              />

            
              <div className="content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="bottom">
                  <span>💰 Rs {service.price}</span>

                  <button
                    className="service-btn"
                    onClick={() => handleServiceClick(service)}
                  >
                    Get Service
                  </button>

                </div>
              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Services;