import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatVisible, setIsChatVisible] = useState(false);
  const chatEndRef = useRef(null); // Reference for auto-scrolling

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever messages update
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit("message", `User: ${input}`);
      setInput("");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        position: "fixed",
        bottom: "20px",
        right: "20px",
      }}
    >
      <button
        onClick={() => setIsChatVisible((prev) => !prev)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isChatVisible ? "Hide Chat" : "Show Chat"}
      </button>
      {isChatVisible && (
        <div>
          <h2>Bot Chat Phase 1</h2>
          <div
            style={{
              marginTop: "10px",
              width: "400px",
              height: "400px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "right" }}>
              <div>X</div>
            </div>
            <div
              style={{
                height: "300px",
                overflowY: "scroll",
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              {messages.map((msg, index) => {
                const isUser = msg.startsWith("User");
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: isUser ? "flex-end" : "flex-start",
                      marginBottom: "10px",
                    }}
                  >
                    {msg.startsWith("Bot") ? (
                      <strong style={{ color: "blue" }}>{msg}</strong>
                    ) : (
                      <strong style={{}}>{msg}</strong>
                    )}
                  </div>
                );
              })}
              {/* Empty div to track scroll position */}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={sendMessage}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ width: "80%", padding: "5px" }}
                placeholder="Type a message..."
              />
              <button
                type="submit"
                style={{ padding: "5px 10px", marginLeft: "5px" }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
