import express, { Router } from "express";
import Driver from "../models/Driver.js";
import {authMiddleware, roleMiddleware} from "../middleware/authMiddleware.js";
import { getDrivers } from "../controllers/driverController.js";

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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const total = await Driver.countDocuments();
    const drivers = await Driver.find().skip(skip).limit(limit) ;
    res.json({
      success: true,
      data: drivers,
      total,
      totalPages: Math.ceil(total / limit),
      page,
      limit,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching details", error: error.message });
  }
});


// super admin can update drivers

router.put("/:id", authMiddleware, roleMiddleware(["superadmin"]), async (req, res) => {
  try {
    const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!updatedDriver) return res.status(404).json({message: "Driver not found"});
    res.json(updatedDriver);
  } catch(error){
    res.status(500).json({message: "Error updating driver", error: error.message});
  }
});

// super admin can delete driver

router.delete("/:id", authMiddleware, roleMiddleware(["superadmin"]), async (req, res) => {
  try {
    const deletedDriver = await Driver.findByIdAndDelete(req.params.id);
    if (!deletedDriver) return res.status(404).json({message: "Driver not found"});
    res.json({message: 'Driver deleted successfully'});
  } catch (error) {
    res.status(500).json({ message: "Error deleting Driver", error: error.message});
  }
});

export default router;
