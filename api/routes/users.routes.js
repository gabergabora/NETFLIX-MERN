const userRouter = require("express").Router();

const verifyToken = require("../verifyToken");

const { updateUser, deleteUser } = require("./user.controller");

userRouter.put("/:id", verifyToken, updateUser);

userRouter.delete("/:id", verifyToken, deleteUser);

module.exports = userRouter;
