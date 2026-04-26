import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
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
      await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      alert("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
      alert("Error sending message ❌");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
          required
        />

        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;