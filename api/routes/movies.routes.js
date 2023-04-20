const movieRouter = require("express").Router();
const verifyToken = require("../verifyToken");

const { createMovie } = require("./movie.controller");

movieRouter.post("/", verifyToken, createMovie);

module.exports = movieRouter;
