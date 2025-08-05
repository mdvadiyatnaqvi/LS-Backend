const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;

        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected successfully!`);
        return conn;
    } catch (error) {
        console.error("Error connecting to MongoDB:");
    }
};

module.exports = connectDB;
