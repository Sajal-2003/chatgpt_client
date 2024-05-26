import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logout Successfully");
      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar">
      <h1>AI GPT3 Clone</h1>
      <div>
        {loggedIn ? (
          <>
            <NavLink to="/" className="link">
              Home
            </NavLink>
            <NavLink to="/login" onClick={handleLogout} className="link">
              Log Out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/register" className="link">
              Sign Up
            </NavLink>
            <NavLink to="/login" className="link">
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
