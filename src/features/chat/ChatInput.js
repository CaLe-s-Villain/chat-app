import React, { useState } from "react";
import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
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
          autoComplete="off"
          variant="outlined"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          value={input}
          aria-label="enter message"
          fullWidth
          sx={{
            borderRadius: "25px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px", // Targets the input container
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" color="primary" type="submit">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <Button
          type="submit"
          variant="contained"
          color="primary"
          aria-label="send message"
        >
          <SendIcon />
        </Button> */}
      </Stack>
    </form>
  );
};

export default ChatInput;
