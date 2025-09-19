import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import driverRoutes from "./routes/driverRoutes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js"

const app = express();

app.use(cors()); // allows requests from frontend
app.use(express.json()); // parse json bodies

app.use("/api/drivers", driverRoutes);
app.use("/api/vehicles", vehicleRoutes)

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running successfully!"); // test route
});

const mongoUri = process.env.MONGO_URI || "";

mongoose
  .connect(mongoUri, {   // to print success, failures to console
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection Error:", err.message);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

