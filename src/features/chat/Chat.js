import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatContainer from "./ChatContainer";

const socket = io("http://localhost:5001");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isChatVisible, setIsChatVisible] = useState(false);

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

  return (
    <ChatContainer
      messages={messages}
      sendMessage={sendMessage}
      toggleChat={() => setIsChatVisible((prev) => !prev)}
      isChatVisible={isChatVisible}
    />
  );
};

export default Chat;
