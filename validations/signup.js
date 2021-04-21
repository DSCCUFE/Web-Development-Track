const { body } = require('express-validator');

const validations = [
    body('firstname', 'First Name is required!').notEmpty(),
    body('firstname', 'First Name length must be between 2 and 100!').isLength({ min: 2, max: 100 }),
    body('lastname', 'Last Name is required!').notEmpty(),
    body('username', 'Username is required!').notEmpty(),
    body('email', 'Email is required!').notEmpty(),
    body('email', 'Email is not valid!').isEmail(),
    body('password', 'Password is required!').notEmpty(),
    body('confirmPassword', 'Confirm Password is required!').notEmpty(),
    body('confirmPassword', 'Passwords don\'t match!').not().equals('password'),
    body('birthdate', 'Birth Date is required!').notEmpty(),
    body('gender', 'Gender is required!').notEmpty()
];

module.exports = validations;