const mongoose = require("mongoose")

const cinemaSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]

})

const Cinema = mongoose.model("Cinema", cinemaSchema)

module.exports = Cinema