import express, { Request, Response } from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";

const dotenv = require("dotenv");
const envPath =
  process.env.NODE_ENV === "production"
    ? "./src/environments/production.env"
    : "./src/environments/development.env";

dotenv.config({ path: envPath });

const app = express();
const port = process.env.PORT || 5500;
console.log("POTR>>>>>>>>>>", process.env.PORT);

app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URL || "mongodb://localhost:27017/contacts";
mongoose
.connect(mongoURI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Basic route
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

// Routes
app.use("/api", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
