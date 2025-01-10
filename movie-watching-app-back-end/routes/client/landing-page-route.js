const express = require('express')
const router = express.Router()
const controller = require('../../controllers/client/landing-controller')

router.get('/', controller.landing)

module.exports = router;