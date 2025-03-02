import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import ChatButton from "./ChatButton";
import MessageList from "./MessageList";
import CloseIcon from "@mui/icons-material/Close";
import ChatInput from "./ChatInput";

const ChatContainer = ({ messages, sendMessage }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    //Wrapper for everything chat related
    <Box
      component="section"
      sx={{
        width: "400px",
        margin: "auto",
        position: "absolute",
        display: "flex",
        justifyContent: "right",
        bottom: "20px",
        right: "20px",
        p: 2,
        borderRadius: 1,
      }}
    >
      {/* Toggle button for chat */}
      {!isChatVisible && (
        <ChatButton toggleChat={() => setIsChatVisible((prev) => !prev)} />
      )}
      {/* End toggle button for chat */}
      {/* Start Chat Window Container */}
      {isChatVisible && (
        <Paper
          elevation={10}
          sx={{
            pb: 2,
            pt: 0,
            overflow: "hidden",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "primary.dark",
              mt: 0,
            }}
          >
            <Typography sx={{ p: 2 }}>Wealth Advisor</Typography>
            <CloseIcon
              onClick={() => setIsChatVisible((prev) => !prev)}
              sx={{ mr: 2, mt: 2 }}
            />
          </Box>
          {/* Message container */}
          <MessageList messages={messages} />
          {/* End Message Container */}
          <ChatInput sendMessage={sendMessage} />
        </Paper>
      )}
      {/* End Chat Window Container */}
    </Box> // End Chat Wrapper
  );
};

export default ChatContainer;
