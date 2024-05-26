import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Chatbot = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/chatbot", { text });
      setResponse(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cont">
      <form onSubmit={handleSubmit}>
        <h3 className="signup">Ask with Chatbot</h3>
        <input
          type="text"
          required
          placeholder="Add your Text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="Submit">Chat</button>
        <p>
          <span>Not this tool</span>
          <Link to="/">GO BACK</Link>
        </p>
        {response ? (
          <div className="card">
            <div className="card-content">{response}</div>
          </div>
        ) : (
          <div className="card">
            <div className="card-content"> BOT Response</div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Chatbot;
