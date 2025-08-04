import 'dotenv/config';
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 4000;
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})