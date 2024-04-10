const { check } = require('express-validator');

exports.validateUrl = [
    check('fullUrl')
        .not()
        .isEmpty()
        .withMessage('Full URL is required')
        .isURL()
        .withMessage('Full URL must be a valid URL'),
];
