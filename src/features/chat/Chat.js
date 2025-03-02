import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatContainer from "./ChatContainer";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = (input) => {
    socket.emit("message", `${input}`);
  };

  return <ChatContainer messages={messages} sendMessage={sendMessage} />;
};

export default Chat;
