const express = require('express')
const {validateUrl} = require("../utils/validators/validateUrl");

const router = express.Router()
const {
    create,
    index, 
    openUrl

} = require('../controllers/urlShortenerController')

router.post('/',validateUrl,create)
router.get('/',index)
router.get('/:shortUrl',openUrl)

module.exports = router