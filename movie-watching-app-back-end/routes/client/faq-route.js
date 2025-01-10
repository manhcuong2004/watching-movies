const express = require('express')
const router = express.Router()
const controller = require('../../controllers/client/faq-controller')

router.get('/', controller.faq)

module.exports = router;