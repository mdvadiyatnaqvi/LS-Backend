const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

const connectDB = async () => {
    try {
        await mongoose.connect(mongo_url)
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.error('MongoDB connection failed:', error.message)
        process.exit(1)
    }
}

module.exports = connectDB;
