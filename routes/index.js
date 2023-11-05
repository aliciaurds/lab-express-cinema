const express = require("express");
const Cinema = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { isIndexPage: true });
  //necesito aplicar estilo de background SOLO a la main page
});

//GET movies
router.get("/movies", (req, res, next) => {
  //* console.log("Route accessed");
  Cinema.find()
    .then((response) => {
      console.log(response);
      res.render("movies/movies.hbs", {
        allMovies: response,
        isIndexPage: false,
      });
    })
    .catch((err) => {
      console.log("error", err);
      next(err);
    });
});
//Get each movie
router.get("/movies/:movieId", (req, res, next) => {
  // *console.log("accessed");
  Cinema.findById(req.params.movieId)
    .then((response) => {
      console.log(response);
      res.render("movies/single-movie.hbs", {
        oneMovie: response,
        isIndexPage: false, // para que no se apliquen estilos
      });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
