const express = require("express");
const axios = require("axios");

const cors = require("cors");
const app = express();
app.use(cors());

const PORT = 5000;
app.set("json spaces", 2);

app.get("/", (req, res) => {
  res.send("Welcome to your App!");
});

app.get("/getdata", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.json("Error occured!");
    });
});

app.listen(PORT, function () {
  console.log("Express server listening on port", PORT);
});
