import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    licenseNo: {
        type: String,
        required: true,
        unique: true
    },
    contactNo: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    }
});

const Driver = mongoose.model("Driver", driverSchema);

export default Driver;