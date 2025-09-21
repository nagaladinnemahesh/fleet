import express, { Router } from "express";
import Driver from "../models/Driver.js";
import {authMiddleware, roleMiddleware} from "../middleware/authMiddleware.js";

const router = express.Router();

// only superadmin can add drivers

router.post("/", authMiddleware, roleMiddleware(["superadmin"]), async(req, res) => {
  try {
    const driver = new Driver(req.body);
    await driver.save();
    res.status(201).json(driver);
  } catch(error){
    res.status(500).json({message: "Error creating driver", error: error.message});
  }
});


// clients and super admins can view drivers

router.get("/", authMiddleware, roleMiddleware(["superadmin","client"]), async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching details", error: error.message });
  }
});


// super admin can delete driver

router.delete("/:id", authMiddleware, roleMiddleware(["superadmin"]), async (req, res) => {
  try {
    await Driver.findByIdAndDelete(req.params.id);
    res.json({ message: "Driver Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Driver", error: error.message});
  }
});

export default router;
