import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import MessageList from "./MessageList";
import CloseIcon from "@mui/icons-material/Close";
import ChatInput from "./ChatInput";

const ChatWindow = ({ messages, sendMessage, setIsChatVisible }) => {
  return (
    <Paper
      elevation={10}
      sx={{
        pb: 2,
        pt: 0,
        // backgroundColor: "primary.light",
        // color: "primary.contrastText",
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
  );
};

export default ChatWindow;
