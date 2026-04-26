import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from './pages/Home.jsx';
import Services from "./pages/Services.jsx";
import Contact from './pages/Contact.jsx';
import Booking from './pages/Booking.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';
import AdminLogin from "./admin/AdminLogin.jsx";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;