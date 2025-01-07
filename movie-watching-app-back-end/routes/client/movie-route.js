const express = require('express')
const router = express.Router()
const controller = require('../../controllers/client/movie-controller')

router.get('/', controller.movie)

module.exports = router;