const { body } = require('express-validator');

const validations = [
    body('postTitle', 'Title is required!').notEmpty(),
    body('postTitle', 'Title length must be between 2 and 100!').isLength({ min: 2, max: 25 }),
    body('postContent', 'Content is required!').notEmpty(),
    body('postContent', 'Content length must be at least 10 characters!').isLength({ min: 10 })
];

module.exports = validations;