import React, { useState } from "react";
import { Box } from "@mui/material";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const chatContainerStyles = {
  width: "400px",
  margin: "auto",
  position: "absolute",
  display: "flex",
  justifyContent: "right",
  bottom: "20px",
  right: "20px",
  p: 2,
  borderRadius: 1,
};

const ChatContainer = ({ messages, sendMessage }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    //Wrapper for everything chat related
    <Box component="section" sx={{ chatContainerStyles }}>
      {/* Toggle button for chat */}
      {!isChatVisible && (
        <ChatButton toggleChat={() => setIsChatVisible((prev) => !prev)} />
      )}
      {/* End toggle button for chat */}
      {/* Start Chat Window Container */}
      {isChatVisible && (
        <ChatWindow
          toggleChat={() => setIsChatVisible((prev) => !prev)}
          messages={messages}
          sendMessage={sendMessage}
        />
      )}
      {/* End Chat Window Container */}
    </Box> // End Chat Wrapper
  );
};

export default ChatContainer;
