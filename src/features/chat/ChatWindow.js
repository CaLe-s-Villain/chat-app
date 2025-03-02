import React from "react";
import { Paper } from "@mui/material";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import ChatTitleBar from "./ChatTitleBar";

const ChatWindow = ({ toggleChat, messages, sendMessage }) => {
  return (
    <Paper
      elevation={10}
      sx={{
        pb: 2,
        pt: 0,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <ChatTitleBar toggleChat={toggleChat} />
      {/* Message container */}
      <MessageList messages={messages} />
      {/* End Message Container */}
      <ChatInput sendMessage={sendMessage} />
    </Paper>
  );
};

export default ChatWindow;
