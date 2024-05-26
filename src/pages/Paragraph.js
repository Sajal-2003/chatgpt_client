import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Paragraph = () => {
  const [text, setText] = useState("");
  const [para, setPara] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://chatgpt-backend-1ss4.onrender.com/api/v1/openai/paragraph",
        { text }
      );
      // alert(data.text);
      // console.log(data.text);
      setPara(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cont">
      <form onSubmit={handleSubmit}>
        <h3 className="signup">Generate Paragraph</h3>
        <input
          type="text"
          required
          placeholder="Add your Text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="Submit">Generate</button>
        <p>
          <span>Not this tool</span>
          <Link to="/">GO BACK</Link>
        </p>
        {para ? (
          <div className="card">
            <div className="card-content">{para}</div>
          </div>
        ) : (
          <div className="card">
            <div className="card-content"> Paragraph will appear here</div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Paragraph;
