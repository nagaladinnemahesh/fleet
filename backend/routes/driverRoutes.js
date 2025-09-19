import express, { Router } from "express";
import Driver from "../models/Driver.js";

const router = express.Router();

// Get all drivers list

router.get("/", async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching details" });
  }
});

// add new driver

router.post("/", async (req, res) => {
  try {
    const { name, licenseNo, contact, availability } = req.body;
    const newDriver = new Driver({ name, licenseNo, contact, availability });
    await newDriver.save();
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(500).json({ message: "Error adding driver" });
  }
});

// delete driver

router.delete("/:id", async (req, res) => {
  try {
    await Driver.findByIdAndDelete(req.params.id);
    res.json({ message: "Driver Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Driver" });
  }
});

export default router;
