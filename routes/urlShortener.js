const express = require('express')
// import the validator
const {validateUrl} = require("../utils/validators/validateUrl");

const router = express.Router()
const {
    create,
    index, 
    openUrl

} = require('../controllers/urlShortenerController')
// setup the routes to handle requests, which are passed to controller methods.
router.post('/',validateUrl,create)
router.get('/',index)
router.get('/:shortUrl',openUrl)

module.exports = router