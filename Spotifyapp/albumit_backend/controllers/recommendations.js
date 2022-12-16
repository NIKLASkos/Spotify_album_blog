const router = require('express').Router()
const Recommendation = require('../models/recommendation')

router.post('/', async (request, response) => {
  
    const recommendation = request.body
    
    console.log('recommendation', request.body)
    const recommendationObject = new Recommendation({ ...recommendation })
    
    const savedRecommendation = await recommendationObject.save()
  
    response.status(201).json(savedRecommendation)
  })

module.exports = router