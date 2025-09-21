// controllers/driverController.js
import Driver from "../models/Driver.js";

export const getDrivers = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // defaults
    const drivers = await Driver.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Driver.countDocuments();

    res.json({
      success: true,
      total,
      page: Number(page),
      limit: Number(limit),
      data: drivers
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
