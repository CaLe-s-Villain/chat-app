import React, { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = ({ sendMessage }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
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
  );
};

export default ChatInput;
