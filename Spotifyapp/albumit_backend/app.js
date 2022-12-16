const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const albumRouter = require('./controllers/albums')
const recommendationRouter = require('./controllers/recommendations')
const MONGODB_URI='DATABASE_HERE'

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch( error => {
    console.log(error.message)
  })

app.use(cors())
app.use(express.json())
app.use('/recommendations', recommendationRouter)

app.use('/', albumRouter)



module.exports = app