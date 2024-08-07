import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Summary = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/openai/summary",
        { text }
      );
      setSummary(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cont">
      <form onSubmit={handleSubmit}>
        <h3 className="signup">Summarize Text</h3>
        <textarea
          rows={10}
          cols={40}
          type="text"
          required
          autoComplete="true"
          placeholder="Add your Text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="Submit">Submit</button>
        <p>
          <span>Not this Tool</span>
          <Link to="/">GO BACK</Link>
        </p>
        {summary ? (
          <div className="card">
            <div className="card-content">{summary}</div>
          </div>
        ) : (
          <div className="card">
            <div className="card-content"> Summary will appear here</div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Summary;
