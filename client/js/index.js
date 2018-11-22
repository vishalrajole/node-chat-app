var socket = io();
socket.on("connect", function() {
  console.log("connected to socket connection");
});

socket.on("newMessage", function(data) {
  console.log("message received:", data);
  var li = $("<li></li>");
  li.text(`${data.from}: ${data.text}`);
  $("#messages").append(li);
});

socket.on("disconnect", function() {
  console.log("disconnected to socket connection");
});

$("#message-form").on("submit", function(e) {
  console.log("isideaklsdn");
  e.preventDefault();
  socket.emit(
    "createMessage",
    {
      from: "User",
      text: $("[name=message]").val()
    },
    function() {}
  );
});
