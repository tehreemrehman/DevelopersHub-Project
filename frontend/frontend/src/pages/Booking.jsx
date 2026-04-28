import { useState } from "react";
import "./Booking.css";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    alert("Booking successful ✅");
  };

  return (
    <div className="booking-container">
      <div className="booking-box">
        <h2>Book Appointment</h2>

        <form onSubmit={submitForm}>
          <input name="name" placeholder="Your Name" onChange={handleChange} />
          <input name="email" placeholder="Your Email" onChange={handleChange} />
          
          <input type="date" name="date" onChange={handleChange} />
          <input type="time" name="time" onChange={handleChange} />

          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;