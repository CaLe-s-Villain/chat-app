import React from "react";
import { Box } from "@mui/material";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const ChatContainer = ({
  messages,
  sendMessage,
  isChatVisible,
  toggleChat,
}) => {
  return (
    //Wrapper for everything chat related
    <Box component="section" id="chat-container">
      {/* Toggle button for chat */}
      {!isChatVisible && <ChatButton toggleChat={toggleChat} />}
      {/* End toggle button for chat */}
      {/* Start Chat Window Container */}
      {isChatVisible && (
        <ChatWindow
          toggleChat={toggleChat}
          messages={messages}
          sendMessage={sendMessage}
        />
      )}
      {/* End Chat Window Container */}
    </Box> // End Chat Wrapper
  );
};

export default ChatContainer;
