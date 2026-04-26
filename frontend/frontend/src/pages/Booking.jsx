import { useState } from "react";
import "./Booking.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      alert("Booking successful ✅");

      setFormData({
        name: "",
        email: "",
        date: "",
        time: ""
      });

    } catch (error) {
      console.log(error);
      alert("Error booking ❌");
    }
  };

  return (
    <div className="booking-container">
      <h1>Book a Meeting</h1>

      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="booking-input"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="booking-input"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="booking-input"
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="booking-input"
          required
        />

        <button type="submit" className="booking-button">
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Booking;