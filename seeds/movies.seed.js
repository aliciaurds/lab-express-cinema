const mongoose = require("mongoose");
const Cinema = require("../models/Movie.model");
const cinemaData = require("./movies.json");

mongoose
  .connect("mongodb://127.0.0.1:27017/lab-express-cinema")
  .then(() => {
    console.log("Connected");
    return Cinema.insertMany(cinemaData);
  })
  .then(() => {
    console.log("Mission accomplish, movies added");
    return mongoose.disconnect();
  })
  .then(() => {
    console.log("unconnected");
  })

  .catch((err) => {
    console.log(err);
  });
