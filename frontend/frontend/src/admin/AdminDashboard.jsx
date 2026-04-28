import { useEffect, useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const token = localStorage.getItem("token");

  const [contacts, setContacts] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!token) {
      window.location.href = "/admin-login";
    }
  }, [token]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contacts", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setContacts(data));

    fetch("http://localhost:5000/api/bookings", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setBookings(data));
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  return (
    <div className="admin-container">
      
      <div className="admin-header">
        <h1>🚀 Admin Dashboard</h1>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
      
      <div className="stats">
        <div className="stat-card">📩 Contacts <span>{contacts.length}</span></div>
        <div className="stat-card">📅 Bookings <span>{bookings.length}</span></div>
      </div>
      <div className="section">
        <h2>📩 Contacts</h2>

        {contacts.length === 0 ? (
          <p className="empty">No contacts found</p>
        ) : (
          contacts.map((c) => (
            <div className="card" key={c._id}>
              <h3>{c.name}</h3>
              <p>📧 {c.email}</p>
              <p>💬 {c.message}</p>
            </div>
          ))
        )}
      </div>

      <div className="section">
        <h2>📅 Bookings</h2>

        {bookings.length === 0 ? (
          <p className="empty">No bookings found</p>
        ) : (
          bookings.map((b) => (
            <div className="card" key={b._id}>
              <h3>{b.name}</h3>
              <p>📧 {b.email}</p>
              <p>⏰ {b.date} | {b.time}</p>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default AdminDashboard;