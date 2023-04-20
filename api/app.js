const express = require("express");

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/users.routes");

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

module.exports = app;
