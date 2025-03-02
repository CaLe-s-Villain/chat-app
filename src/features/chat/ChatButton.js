import React from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const ChatButton = ({ toggleChat }) => {
  return (
    <ChatBubbleIcon
      color="primary"
      onClick={toggleChat}
      sx={{ fontSize: 40, position: "absolute", bottom: "20px", right: "20px" }}
    />
  );
};

export default ChatButton;
