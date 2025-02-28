import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Box } from "@mui/material";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isChatVisible, setIsChatVisible] = useState(false);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = (input) => {
    socket.emit("message", `${input}`);
  };

  return (
    //Wrapper for everything chat related
    <Box
      component="section"
      sx={{
        width: "400px",
        margin: "auto",
        position: "absolute",
        bottom: "20px",
        right: "20px",
        p: 2,
        borderRadius: 1,
      }}
    >
      {/* Toggle button for chat */}
      {!isChatVisible && (
        <ChatButton toggleChat={() => setIsChatVisible((prev) => !prev)} />
      )}
      {/* End toggle button for chat */}
      {/* Start Chat Window Container */}
      {isChatVisible && (
        <ChatWindow
          messages={messages}
          sendMessage={sendMessage}
          setIsChatVisible={setIsChatVisible}
        />
      )}
      {/* End Chat Window Container */}
    </Box> // End Chat Wrapper
  );
};

export default Chat;
