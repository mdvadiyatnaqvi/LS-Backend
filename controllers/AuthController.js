const userModel = require("../models/User");
const bcrypt = require('bcrypt')

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

module.exports = { signUp }