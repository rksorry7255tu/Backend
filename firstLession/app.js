const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.set("view Engine", "ejs");

app.get(
  "/",
  (req, res, next) => {
    console.log("this is / middle ware");
    return next();
  },
  (req, res) => {
    res.render("index.ejs");
  }
);
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

app.listen(3000);
