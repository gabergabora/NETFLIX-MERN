const Movie = require("../models/Movie");

const createMovie = async (req, res) => {
  const newMovie = new Movie(req.body);
  // if the user is an admin, then create a new movie
  if (req.user.isAdmin) {
    try {
      const savedMovie = await newMovie.save();
      res.status(200).json(savedMovie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed to create movies!");
  }
};

module.exports = {
  createMovie,
};
