const userModel = require("../models/User");

const signUp = async (req, res){
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "User exist, plesae login!" })
        }
    } catch (error) {

    }
}

module.exports = { signUp }