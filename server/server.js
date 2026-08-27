import express from "express";
import cors from "cors";
import multer from "multer";
import "dotenv/config";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());
app.use(multer().none());

//routes
app.get("/", (req, res) => res.send("Server is running"));

await connectDB();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
