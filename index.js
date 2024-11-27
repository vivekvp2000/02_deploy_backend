const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome To Chai Or Code" });
});

app.get("/login", (req, res) => {
  res.send("Login Done");
});

app.get("/health", (req, res) => {
  res.json({ message: "App is working fine..." });
});

app.listen(port, () => {
  console.log(`Port is Running on ${port}`);
});
