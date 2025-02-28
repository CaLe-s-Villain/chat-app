import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import {
  Box,
  Paper,
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import ChatButton from "./ChatButton";
import MessageList from "./MessageList";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatVisible, setIsChatVisible] = useState(false);
  const chatEndRef = useRef(null); // Reference for auto-scrolling after each new message.

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    // auto-scroll to bottom whenever messages update
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit("message", `${input}`);
      setInput("");
    }
  };

  return (
    //Wrapper for everything chat related
    <Box
      component="section"
      sx={{
        maxWidth: "400px",
        margin: "auto",
        position: "absolute",
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
      {/* Start Chat Window */}
      {isChatVisible && (
        <Box sx={{ width: "400px" }}>
          <Paper
            elevation={10}
            sx={{
              pb: 2,
              backgroundColor: "primary.light",
              color: "primary.contrastText",
              overflow: "hidden",
            }}
          >
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
              <form onSubmit={sendMessage}>
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
          </Paper>
        </Box>
      )}
      {/* End Chat Window */}
    </Box> // End Chat Wrapper
  );
};

export default Chat;
