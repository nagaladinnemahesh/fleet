import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vehicleNo: {
        type: String,
        required: true,
        unique: true
    },
    capacity: {
        type: Number,
        requied: true
    },
    status: {
        type: String,
        required: true
    }
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;