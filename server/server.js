const path = require("path");
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const { generateMesssage } = require("./utils/message");

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "../client");

const app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("new user connected: ");

  socket.emit(
    "newMessage",
    generateMesssage("Admin", "Welcome to the chat app")
  );
  socket.broadcast.emit(
    "newMessage",
    generateMesssage("Admin", "New user joined")
  );
  socket.on("createMessage", message => {
    io.emit("newMessage", generateMesssage(message.from, message.text));
  });

  socket.on("disconnect", () => {
    console.log("disconnected socket");
  });
});

server.listen(port, () => {
  console.log(`server started on ${port}`);
});
