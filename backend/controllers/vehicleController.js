import Vehicle from "../models/Vehicle.js";

export const getVehicles = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // defaults
    const vehicles = await Vehicle.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Vehicle.countDocuments();

    res.json({
      success: true,
      total,
      page: Number(page),
      limit: Number(limit),
      data: vehicles
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
