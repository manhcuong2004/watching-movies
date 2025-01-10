const express = require('express')
const router = express.Router()
const controller = require('../../controllers/client/about-us-controller')

router.get('/', controller.aboutUs)

module.exports = router;