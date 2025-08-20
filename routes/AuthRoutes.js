const { loginValidation, signupValidation } = require('../middleware/AuthValidations');

const router = require('express').Router();

router.post('/login', loginValidation, (req, res) => {
    res.status(200).json({ message: 'Login successful' });
});
router.post('/signup', signupValidation, signUp)
})

module.exports = router;
