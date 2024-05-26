import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./Register.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      localStorage.setItem("authToken", true);
      toast.success("Login successfully");
      navigate("/");
    } catch (err) {
      if (err.response.request.status === 400) {
        toast.error(err.response.data.msg);
      }
      console.log(err);
    }
  };

  return (
    <div className="cont">
      <form onSubmit={handleSubmit}>
        <h3 className="signup">Sign In</h3>
        <input
          type="email"
          autoComplete="off"
          required
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          required
          name="password"
          autoComplete="off"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="Submit">Sign In</button>
        <p>
          <span>Don't have an Account</span>
          <Link to="/register">Please Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
