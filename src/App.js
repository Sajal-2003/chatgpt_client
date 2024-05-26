import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";
import Chatbot from "./pages/Chatbot";
import JsConvertor from "./pages/JsConvertor";

const App = () => {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/paragraph" element={<Paragraph />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/jsConvertor" element={<JsConvertor />} />
      </Routes>
    </>
  );
};

export default App;
