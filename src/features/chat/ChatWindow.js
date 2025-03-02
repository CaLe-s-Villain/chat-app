import React from "react";
import { Paper } from "@mui/material";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import ChatTitleBar from "./ChatTitleBar";

const chatWindowStyles = {
  pb: 2,
  pt: 0,
  overflow: "hidden",
  width: "400px",
  margin: "auto",
  position: "absolute",
  bottom: "20px",
  right: "20px",
  borderRadius: 1,
};

const ChatWindow = ({ toggleChat, messages, sendMessage }) => {
  return (
    <Paper elevation={10} sx={chatWindowStyles}>
      <ChatTitleBar toggleChat={toggleChat} />
      {/* Message container */}
      <MessageList messages={messages} />
      {/* End Message Container */}
      <ChatInput sendMessage={sendMessage} />
    </Paper>
  );
};

export default ChatWindow;
