import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import MessageItemBot from "./MessageItemBot";
import MessageItemUser from "./MessageItemUser";
import ResponsePieChart from "./ResponsePieChart";
import ResponseBarChart from "./ResponseBarChart";

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
        console.log(msg);
        const isUser = msg[0].startsWith("User");
        const text = msg[1];
        if (Array.isArray(msg) && msg[2] === "chart") {
          return msg[1].type === "pie" ? (
            <ResponsePieChart key={index} data={msg[1].data} />
          ) : (
            <ResponseBarChart key={index} data={msg[1].data} />
          );
        }
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
