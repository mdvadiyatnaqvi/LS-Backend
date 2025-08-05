require('dotenv').config({ quiet: true });
const express = require('express');
const connectDB = require('./config/db.js');

const PORT = process.env.PORT || 4000;
const app = express();

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('Service is running');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
