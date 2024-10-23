const campaignModel = require("../models/campaign.model");

// Get all campaigns
module.exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await campaignModel.find();
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
