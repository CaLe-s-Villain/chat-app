import React, { useEffect, useRef } from "react";
import { Box, Stack, Typography, Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

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
        console.log(msg);
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
              <Stack direction={"row"} spacing={1}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
                <Box>
                  <Box
                    sx={{
                      color: "primary.contrastText",
                      borderRadius: 1,
                      bgcolor: "primary.dark",
                      p: 1,
                    }}
                  >
                    <Typography variant="body2">{text}</Typography>
                  </Box>
                </Box>
              </Stack>
            ) : (
              <Box>
                <Typography
                  variant="caption"
                  sx={{ display: "block", textAlign: "right", pr: 1 }}
                >
                  You
                </Typography>
                <Box
                  sx={{
                    color: "secondary.contrastText",
                    borderRadius: 1,
                    bgcolor: "secondary.main",
                    p: 1,
                  }}
                >
                  <Typography variant="body2">{text}</Typography>
                </Box>
              </Box>
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
