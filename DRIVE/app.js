const express = require("express");

const dotenv = require("dotenv");
dotenv.config();
const connectToDB = require("./config/db.js");
connectToDB();
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.routes");
const indexRouter = require("./routes/index.routes.js");

const app = express();

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/", indexRouter);

app.listen(3000, (req, res) => {
  console.log("server is running on port no 3000");
});
