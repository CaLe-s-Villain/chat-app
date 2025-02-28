import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Box, Paper } from "@mui/material";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isChatVisible, setIsChatVisible] = useState(false);
  // const chatEndRef = useRef(null); // Reference for auto-scrolling after each new message.

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
        maxWidth: "400px",
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
      {/* Start Chat Window */}
      {isChatVisible && (
        <Box sx={{ width: "400px" }}>
          <Paper
            elevation={10}
            sx={{
              pb: 2,
              backgroundColor: "primary.light",
              color: "primary.contrastText",
              overflow: "hidden",
            }}
          >
            <ChatWindow
              messages={messages}
              sendMessage={sendMessage}
              setIsChatVisible={setIsChatVisible}
            />
          </Paper>
        </Box>
      )}
      {/* End Chat Window */}
    </Box> // End Chat Wrapper
  );
};

export default Chat;
