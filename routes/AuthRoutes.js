const { loginValidation, signupValidation } = require('../middleware/AuthValidations');
const { signUp, login } = require('../controllers/AuthController')

const router = require('express').Router();

router.post('/login', loginValidation, login)
router.post('/signup', signupValidation, signUp)

module.exports = router;
