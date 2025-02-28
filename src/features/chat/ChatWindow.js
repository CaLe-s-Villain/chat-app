import React, { useState } from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import MessageList from "./MessageList";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const ChatWindow = ({ messages, sendMessage, setIsChatVisible }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <Box sx={{ overflow: "hidden", pt: 0, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "primary.dark",
          mt: 0,
        }}
      >
        <Typography sx={{ p: 2 }}>NVIDIA Advisor</Typography>
        <CloseIcon
          onClick={() => setIsChatVisible((prev) => !prev)}
          sx={{ mr: 2, mt: 2 }}
        />
      </Box>
      {/* Message container */}
      <MessageList messages={messages} />
      {/* End Message Container */}
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2} sx={{ pl: 2, pr: 2 }}>
          <TextField
            id="standard-basic"
            // label="Message"
            variant="standard"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            value={input}
            aria-label="enter message"
            sx={{ width: "100%" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            aria-label="send message"
          >
            <SendIcon />
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ChatWindow;
