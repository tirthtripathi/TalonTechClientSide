import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Scholarshipform from "./components/Scholarshipform";
import Footer from "./components/Footer.jsx";
import Scholarshippage from "./components/Scholarshippage.jsx";
import Login from "./components/Login.jsx";

export default function App() {
 return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/scholarshipform" element={<Scholarshipform/>} />
        <Route  path="/scholarshippage" element={<Scholarshippage/>}  />
      </Routes>
      <Footer />
    </Router>
 );
}
