import { useState } from "react";
import "./Inquiry.css";

function Inquiry() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    alert("Please fill all fields ❗");
    return;
  }

  if (!form.email.includes("@")) {
    alert("Enter valid email ❗");
    return;
  }

  alert("Inquiry submitted successfully ✅");

  // reset form
  setForm({
    name: "",
    email: "",
    message: ""
  });
};

  return (
    <div className="inq-page">

      <form onSubmit={handleSubmit} className="inq-form">

        <h1 className="form-title">Inquiry Form</h1>

        <input
          placeholder="Your Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <textarea
          placeholder="Message"
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <button type="submit">Send Message</button>

      </form>

    </div>
  );
}

export default Inquiry;