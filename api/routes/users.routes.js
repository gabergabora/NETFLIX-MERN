const userRouter = require("express").Router();

const verifyToken = require("../verifyToken");

const { updateUser } = require("./user.controller");

userRouter.put("/:id", verifyToken, updateUser);

module.exports = userRouter;
