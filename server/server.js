const path = require("path");
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "../client");

const app = express();
var server = http.createServer(app);
var socket = socketIO(server);

socket.on("connection", socket => {
  console.log("new user connected: ");
  socket.on("disconnect", () => {
    console.log("disconnected socket");
  });
});

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`server started on ${port}`);
});
