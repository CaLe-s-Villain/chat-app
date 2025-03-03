import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

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
    let responseType = "text"; // default response type will be text

    if (message.toLowerCase().includes("hello")) {
      reply = "Hello, User";
    } else if (message.toLowerCase().includes("how are you")) {
      reply = "I'm just a bot, but I'm doing great!";
    } else if (message.toLowerCase().includes("bye")) {
      reply = "Goodbye! Have a great day!";
    } else if (message.toLowerCase().includes("show me a pie chart")) {
      responseType = "chart";
      reply = {
        type: "pie",
        data: [
          { name: "Apples", value: 40 },
          { name: "Bananas", value: 30 },
          { name: "Oranges", value: 20 },
          { name: "Grapes", value: 10 },
        ],
      };
    } else if (message.toLowerCase().includes("show me a bar chart")) {
      responseType = "chart";
      reply = {
        type: "bar",
        data: [
          { name: "M", value: 10 },
          { name: "T", value: 20 },
          { name: "W", value: 15 },
          { name: "Th", value: 25 },
          { name: "F", value: 30 },
        ],
      };
    }
    setTimeout(() => {
      io.emit("message", [
        "Bot",
        responseType === "text" ? reply : reply,
        responseType,
      ]);
    }, 1000); // Delay for 'realism'
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(5001, () => {
  console.log("Server running on port 5001");
});
