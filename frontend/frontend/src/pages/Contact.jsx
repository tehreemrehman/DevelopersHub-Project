import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully 🚀");

        // form reset
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "Error sending message");
      }

    } catch (error) {
      alert("Server error");
      console.log(error);
    }
  };

  return (
    <div className="contact-page">

      {/* LEFT SIDE INFO */}
      <div className="contact-info">

        <h1>Get In Touch</h1>
        <p>We are here to help you build your dream project 🚀</p>

        <div className="info-box">
          <p>📍 Location: Pakistan</p>
          <p>📧 Email: info@agencypro.com</p>
          <p>📞 Phone: +92 300 1234567</p>
        </div>

      </div>

      {/* RIGHT SIDE FORM */}
      <form className="contact-form" onSubmit={handleSubmit}>

        <h2>Send Message</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button type="submit">Send Message</button>

      </form>

    </div>
  );
}

export default Contact;