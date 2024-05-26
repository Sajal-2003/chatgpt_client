import React from "react";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";

const Home = () => {
  const navigate = useNavigate();

  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  return (
    <>
      {loggedIn ? (
        <>
          <div className="home">
            <div className="home-card">
              <h4>Text Generation</h4>
              <div
                className="home-content"
                onClick={() => navigate("/summary")}
              >
                <DescriptionRounded
                  sx={{ fontSize: 80 }}
                  className="home-content-icon"
                />
                <h5 className="home-content-head">TEXT SUMMARY</h5>
                <p className="home-content-p">
                  Summarize long text into short sentences
                </p>
              </div>
            </div>

            <div className="home-card">
              <h4>Paragraph Generation</h4>
              <div
                className="home-content"
                onClick={() => navigate("/paragraph")}
              >
                <FormatAlignLeftOutlined
                  sx={{ fontSize: 80 }}
                  className="home-content-icon"
                />
                <h5 className="home-content-head">PARAGRAPH</h5>
                <p className="home-content-p">Generate paragraphs with words</p>
              </div>
            </div>

            <div className="home-card">
              <h4>AI Chatbot</h4>
              <div
                className="home-content"
                onClick={() => navigate("/chatbot")}
              >
                <ChatRounded
                  sx={{ fontSize: 80 }}
                  className="home-content-icon"
                />
                <h5 className="home-content-head">Chatbot</h5>
                <p className="home-content-p">Chat with AI chatbot</p>
              </div>
            </div>

            <div className="home-card">
              <h4>JavaScript Convertor</h4>
              <div
                className="home-content"
                onClick={() => navigate("/jsConvertor")}
              >
                <FormatAlignLeftOutlined
                  sx={{ fontSize: 80 }}
                  className="home-content-icon"
                />
                <h5 className="home-content-head">JS Convertor</h5>
                <p className="home-content-p">Translate English to JS Code</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="home-p">
          <p>Please Sign up or Sign in to continue</p>
        </div>
      )}
    </>
  );
};

export default Home;
