require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/AuthRoutes');
const productRoute = require('./routes/ProductRoute');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Service is running...");
});

app.use('/auth', authRoutes);
app.use('/products', productRoute);

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
