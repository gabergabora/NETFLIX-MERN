//express is globally installed
const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/users.routes");
const movieRouter = require("./routes/movies.routes");
const listRouter = require("./routes/lists.routes");
const morgan = require("morgan");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    origin: "http://localhost:3001",
  })
);

app.use(morgan("dev"));

//middleware
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/lists", listRouter);

module.exports = app;
