const userModel = require("../models/User");
const bcrypt = require('bcrypt')

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "User exist, plesae login!", success: false })
        }

        const userModel = new userModel({ name, email, password })
        userModel.password = await bcrypt.hash(password, 10)
        await userModel.save()
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