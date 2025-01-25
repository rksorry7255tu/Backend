const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view Engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("data received");
});

app.listen(3000);
