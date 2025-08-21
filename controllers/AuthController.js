const userModel = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User exist, plesae login!", success: false })
        }

        const newUser = new userModel({ name, email, password })
        newUser.password = await bcrypt.hash(password, 10)
        await newUser.save()
        res.status(201).json({
            message: "Signup Success",
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

const login = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        const errMsg = 'Auth Failed Email or Password is Wrong!'
        if (!existingUser) {
            return res.status(409).json({ message: errMsg, success: false })
        }

        const isPassEqual = await bcrypt.compare(password, existingUser.password)
        if (!isPassEqual) {
            return res.status(403).json({ message: errMsg, success: false })
        }
        const jwtToken = jwt.sign(
            { email: existingUser.email, _id: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200).json({
            message: "Login Success",
            success: true,
            jwtToken,
            email,
            name: existingUser.name
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

module.exports = { signUp, login }