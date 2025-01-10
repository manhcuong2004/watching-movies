const express = require('express')
const router = express.Router()
const controller = require('../../controllers/client/my-profile-controller')

router.get('/', controller.myProfile)

module.exports = router;