import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const JsConvertor = () => {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/jsConvertor", { text });
      setCode(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cont">
      <form onSubmit={handleSubmit}>
        <h3 className="signup">JS Convertor</h3>
        <input
          type="text"
          required
          placeholder="Add your Text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="Submit">Code</button>
        <p>
          <span>Not this tool</span>
          <Link to="/">GO BACK</Link>
        </p>
        {code ? (
          <div className="card">
            <pre>
              <div className="card-content">{code}</div>
            </pre>
          </div>
        ) : (
          <div className="card">
            <div className="card-content">Your Code will appear here</div>
          </div>
        )}
      </form>
    </div>
  );
};

export default JsConvertor;
