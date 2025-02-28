import React from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const ChatButton = ({ toggleChat }) => {
  return (
    <ChatBubbleIcon
      color="primary"
      onClick={toggleChat}
      sx={{ fontSize: 40 }}
    />
  );
};

export default ChatButton;
