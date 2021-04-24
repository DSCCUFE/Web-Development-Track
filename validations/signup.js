const { body } = require('express-validator');
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const birthdateLimit = new Date(year - 18, month, day).toDateString();

const validations = [
    body('firstname', 'First Name is required!').notEmpty(),
    body('firstname', 'First Name length must be between 2 and 100!').isLength({ min: 2, max: 100 }),
    body('lastname', 'Last Name is required!').notEmpty(),
    body('lastname', 'Last Name length must be between 2 and 100!').isLength({ min: 2, max: 100 }),
    body('username', 'Username is required!').notEmpty(),
    body('username', 'Username length must be between 5 and 15!').isLength({ min: 5, max: 15 }),
    body('email', 'Email is required!').notEmpty(),
    body('email', 'Email is not valid!').isEmail(),
    body('email', 'Email length must be at least 6 characters!').isLength({ min: 6 }),
    body('password', 'Password is required!').notEmpty(),
    body('password', 'Invalid password!').isAlphanumeric(),
    body('password', 'Password length must be at least 8 characters!').isLength({ min: 8 }),
    body('confirmPassword', 'Confirm Password is required!').notEmpty(),
    body('birthdate', 'Birth Date is required!').notEmpty(),
    body('birthdate', 'You must be 18 or older!').isBefore(birthdateLimit),
    body('gender', 'Gender is required!').notEmpty(),
    body('gender', 'Invalid Gender!').isIn(['male', 'female'])
];

module.exports = validations;