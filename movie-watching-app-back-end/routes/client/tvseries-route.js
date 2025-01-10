const express = require('express')
const router = express.Router()
const controller = require('../../controllers/client/tvseries-controller')

router.get('/', controller.tvseries)

module.exports = router;