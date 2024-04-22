const { check } = require('express-validator');
// validation logic to handle the incoming request for shortening a Url
exports.validateUrl = [
    check('fullUrl')
        .not()
        .isEmpty()
        .withMessage('Full URL is required')
        .isURL()
        .withMessage('Full URL must be a valid URL'),
];
