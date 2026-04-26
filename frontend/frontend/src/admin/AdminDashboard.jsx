import { useEffect, useState } from "react";

function AdminDashboard() {

  // 🔐 Protect route
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/admin-login";
  }

  const [contacts, setContacts] = useState([]);
  const [bookings, setBookings] = useState([]);

  // 🟢 DELETE CONTACT FUNCTION (IMPORTANT)
  const deleteContact = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/contacts/${id}`, {
        method: "DELETE"
      });

      // update UI
      setContacts(contacts.filter(c => c._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

   // 🟢 DELETE BOOKING FUNCTION (IMPORTANT)
  const deleteBooking = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: "DELETE"
      });

      // update UI
      setBookings(bookings.filter(b => b._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // 🟢 FETCH DATA
  useEffect(() => {
    fetch("http://localhost:5000/api/contacts")
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.log(err));

    fetch("http://localhost:5000/api/bookings")
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      
      <h1>Admin Dashboard</h1>

      {/* 🔓 LOGOUT */}
      <button onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/admin-login";
      }}>
        Logout
      </button>

      {/* 🟢 CONTACTS */}
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        contacts.map((c) => (
          <div
            key={c._id}
            style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
          >
            <p><b>Name:</b> {c.name}</p>
            <p><b>Email:</b> {c.email}</p>
            <p><b>Message:</b> {c.message}</p>

            {/* DELETE BUTTON */}
            <button onClick={() => deleteContact(c._id)}>
              Delete
            </button>
          </div>
        ))
      )}

      {/* 🟢 BOOKINGS */}
      <h2>Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings</p>
      ) : (
        bookings.map((b) => (
          <div
            key={b._id}
            style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}
          >
            <p><b>Name:</b> {b.name}</p>
            <p><b>Email:</b> {b.email}</p>
            <p><b>Date:</b> {b.date}</p>
            <p><b>Time:</b> {b.time}</p>

             {/* DELETE BUTTON */}
            <button onClick={() => deleteBooking(b._id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;