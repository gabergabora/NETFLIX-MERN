const movieRouter = require("express").Router();
const verifyToken = require("../verifyToken");

const {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovie,
  getRandomMovie,
} = require("./movie.controller");

movieRouter.post("/", verifyToken, createMovie);
movieRouter.put("/:id", verifyToken, updateMovie);
movieRouter.delete("/:id", verifyToken, deleteMovie);
movieRouter.get("/find/:id", verifyToken, getMovie);
movieRouter.get("/random", getRandomMovie);

module.exports = movieRouter;
