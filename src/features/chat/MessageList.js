import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import ResponseMessage from "./ResponseMessage";

const MessageListStyles = {
  maxHeight: "400px",
  width: "100%",
  overflowY: "scroll",
  padding: "10px",
  marginBottom: "10px",
  "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar in WebKit browsers
  "-ms-overflow-style": "none", // Hide scrollbar in IE & Edge
  "scrollbar-width": "none", // Hide scrollbar in Firefox
};

const MessageList = ({ messages }) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box sx={MessageListStyles}>
      {/* Messages */}
      {messages.map((msg, index) => {
        return <ResponseMessage key={index} msg={msg} />;
      })}
      {/* End Messages */}
      <Box ref={chatEndRef} /> {/*Target for auto-scroll */}
    </Box>
  );
};

export default MessageList;
