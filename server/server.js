const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "../client");

app.use(express.static(publicPath));

app.get("/login", (req, res) => {});

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
