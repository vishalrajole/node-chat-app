var socket = io();
socket.on("connect", function() {
  console.log("connected to socket connection");
});

socket.on("newMessage", function(data) {
  console.log("message received:", data);
});

socket.on("disconnect", function() {
  console.log("disconnected to socket connection");
});
