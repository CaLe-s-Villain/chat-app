import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import {
  Box,
  Paper,
  TextField,
  Button,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { deepOrange } from "@mui/material/colors";

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
        // bgcolor: "primary.main",
        // "&:hover": {
        //   bgcolor: "primary.dark",
        // },
      }}
    >
      {/* Toggle button for chat */}
      {!isChatVisible && (
        <ChatBubbleIcon
          color="primary"
          onClick={() => setIsChatVisible((prev) => !prev)}
          sx={{ fontSize: 40 }}
        />
      )}
      {/* End toggle button for chat */}
      {/* Start Chat Window */}
      {isChatVisible && (
        <Box sx={{ width: "400px" }}>
          <Paper
            elevation={10}
            sx={{
              // pl: 2,
              // pr: 2,
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
                    // TODO: labels small print on top
                    // TODO: Remove labels from bubbles
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
                            {/* <Typography
                              variant="caption"
                              sx={{ display: "block", pl: 0.5 }}
                            >
                              Advisor
                            </Typography> */}
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
              {/* End Message Container */}
              <form onSubmit={sendMessage}>
                {/* TODO: Move to the right, decide on button or no button */}
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
                    // endIcon={<SendIcon />}
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
