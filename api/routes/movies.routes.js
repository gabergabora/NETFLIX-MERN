const movieRouter = require("express").Router();
const verifyToken = require("../verifyToken");

const { createMovie, updateMovie } = require("./movie.controller");

movieRouter.post("/", verifyToken, createMovie);
movieRouter.put("/:id", verifyToken, updateMovie);

module.exports = movieRouter;
