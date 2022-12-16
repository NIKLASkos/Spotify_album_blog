const router = require('express').Router()
const Album = require('../models/album')

router.get('/', async (_request, response) => {
    const albums = await Album
      .find({})
  
    response.json(albums)
  })

router.post('/', async (request, response) => {
  
    const album = request.body
    console.log('albumi', album)
    console.log('rating', album.rating)
    const albumObject = new Album({
      name: album.name,
      artist: album.artists[0].name,
      img: album.images[0].url,
      release_date: album.release_date,
      total_tracks: album.total_tracks,
      date: album.date,
      rating: album.rating
    })
    
    const savedAlbum = await albumObject.save()
  
    response.status(201).json(savedAlbum)
  })

module.exports = router