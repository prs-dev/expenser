const router = require('express').Router()
const {validToken} = require('../middlewares/auth')
const {userDetails} = require('../controllers/user.controller')

router.get("/", validToken, userDetails)

module.exports = router