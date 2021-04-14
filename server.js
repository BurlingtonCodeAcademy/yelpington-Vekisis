const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

//allows only folders in the client folder to be viewed
app.use(express.static("./client"));

//Sets up route to get all restaurants by given id
app.get("/api", (req, res) => {
  res.sendFile(path.resolve("./client/api/all.json"));
});

//Sets up rout to get restaurant info based upon given restaurant id
app.get("/api/:id", (req, res) => {
  res.sendFile(path.resolve(`./client/api/${req.params.id}.json`));
});

//tunnels into html
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/public/index.html"));
});

//Displays a message in the terminal informing host which port back end is running on
app.listen(port, () => {
  console.log("listening on port", port);
});
