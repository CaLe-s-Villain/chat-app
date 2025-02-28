import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import MessageItemBot from "./MessageItemBot";
import MessageItemUser from "./MessageItemUser";

const MessageList = ({ messages }) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        maxHeight: "400px",
        width: "100%",
        overflowY: "scroll",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      {/* Messages */}
      {messages.map((msg, index) => {
        const isUser = msg[0].startsWith("User");
        const text = msg[1];

        return (
          <Box
            key={index}
            style={{
              display: "flex",
              justifyContent: isUser ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            {msg[0].startsWith("Bot") ? (
              <MessageItemBot message={text} />
            ) : (
              <MessageItemUser message={text} />
            )}
          </Box>
        );
      })}
      {/* End Messages */}
      <Box ref={chatEndRef} /> {/*Target for auto-scroll */}
    </Box>
  );
};

export default MessageList;
