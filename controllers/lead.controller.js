const leadModel = require("../models/lead.model");

// Get all leads
exports.getLeads = async (req, res) => {
  try {
    const leads = await leadModel.find();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
