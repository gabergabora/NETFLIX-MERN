const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/users.routes");
const movieRouter = require("./routes/movies.routes");
const listRouter = require("./routes/lists.routes");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/lists", listRouter);

module.exports = app;
