import express, { Router } from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

// get all vehicles list

router.get("/", async (req,res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch(err){
        res.status(500).json({message: "Error fetching Details"});
    }
})

// add vehicles

router.post("/", async (req, res) => {
    try{
        const {name, vehicleNo, capacity, status} = req.body;
        const newVehicle = new Vehicle({name, vehicleNo, capacity, status});
        await newVehicle.save();
    } catch(err){
        res.status({message: "Error adding vehicle"})
    }
})

// delete vehicle

router.delete("/:id", async (req, res) => {
    try{
        await Vehicle.findByIdAndDelete(req.params.id);
        res.json({message: "Vehicle Deleted"})
    } catch(err){
        res.status(500).json({message: "Error deleteing Vehicle"})
    }
})

export default router;