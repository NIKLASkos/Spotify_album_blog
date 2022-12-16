const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: String,
  img: String,
  artist: String,
  release_date: String,
  total_tracks: String,
  date: String,
  rating: String
})

module.exports = mongoose.model('Album', schema)