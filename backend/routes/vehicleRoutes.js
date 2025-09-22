import express, { Router } from "express";
import Vehicle from "../models/Vehicle.js";
import { authMiddleware, roleMiddleware } from "../middleware/authMiddleware.js";
import { getVehicles } from "../controllers/vehicleController.js";

const router = express.Router();

// only superadmins can add vehicles

router.post("/", authMiddleware, roleMiddleware(["superadmin"]), async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);
        await vehicle.save();
        res.status(200).json({vehicle})
    } catch(error){
        res.status(500).json({message: "Error creating Vehicle", error: error.message})
    }
});

// get all vehicles list client and admin

router.get("/", authMiddleware, getVehicles, roleMiddleware(["superadmin","client"]), async (req,res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch(err){
        res.status(500).json({message: "Error fetching Details", error: err.message});
    }
})

//update vehicles list

router.put("/:id", authMiddleware, roleMiddleware(["superadmin"]), async (req, res) => {
    try{
        const updatedVehicle = Vehicle.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedVehicle) return res.status(404).json({message: "Vehicle not found"});
        res.json(updatedVehicle);
    } catch(error){
        res.status(500).json({message: "Error updating Vehicle", error: error.message});
    }
})

// only superadmin can delete vehicle

router.delete("/:id", authMiddleware, roleMiddleware(["superadmin"]), async (req, res) => {
    try{
        const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (!deletedVehicle) return (res.status(404).json({message: "Vehicle not found"}));
        res.json({message: "Vehicle Deleted successfully"});
    } catch(err){
        res.status(500).json({message: "Error deleteing Vehicle", error: err.message})
    }
});

export default router;