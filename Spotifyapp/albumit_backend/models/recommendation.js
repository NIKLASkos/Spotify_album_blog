const mongoose = require('mongoose')

const schema = mongoose.Schema({
  text: {
    type:String,
    minlength: 1}
})

module.exports = mongoose.model('Recommendation', schema)