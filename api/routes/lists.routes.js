const listRouter = require("express").Router();

const verifyToken = require("../verifyToken");
const { createList, deleteList, getAllLists } = require("./list.controller");

listRouter.post("/", verifyToken, createList);
listRouter.delete("/:id", deleteList);
listRouter.get("/", verifyToken, getAllLists);

module.exports = listRouter;
