const userRouter = require("express").Router();

const verifyToken = require("../verifyToken");

const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} = require("./user.controller");

userRouter.put("/:id", verifyToken, updateUser);
userRouter.delete("/:id", verifyToken, deleteUser);
userRouter.get("/find/:id", getUser);
userRouter.get("/", verifyToken, getAllUsers);

module.exports = userRouter;
