const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;

        if (!mongoURI) {
            console.error("MONGODB_URI is not defined in environment variables");
            console.log("Starting server without database connection...");
            return null;
        }

        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected successfully!`);
        return conn;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        console.log("Starting server without database connection...");
        return null;
    }
};

module.exports = connectDB;
