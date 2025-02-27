const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("message", (message) => {
    io.emit("message", ["User", message]); // Broadcast message to all clients

    // Simulate the server's response
    let reply = "I'm not sure how to respond to that.";
    if (message.toLowerCase().includes("hello")) {
      reply = "Hello, User";
    } else if (message.toLowerCase().includes("how are you")) {
      reply = "I'm just a bot, but I'm doing great!";
    } else if (message.toLowerCase().includes("bye")) {
      reply = "Goodbye! Have a great day!";
    }

    setTimeout(() => {
      io.emit("message", ["Bot", reply]);
    }, 1000); // Delay for 'realism'
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
