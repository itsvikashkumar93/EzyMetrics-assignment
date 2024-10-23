const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  platform: { type: String, required: true }, // Platform (e.g., 'Facebook', 'Google')
  budget: { type: Number, required: true },
  status: {
    type: String,
    enum: ["active", "completed", "paused"], // Campaign status
    default: "active",
  },
  clicks: { type: Number, default: 0 }, // Tracking campaign engagement
  createdAt: { type: Date, default: Date.now },
});

const campaignModel = mongoose.model("campaign", campaignSchema);

module.exports = campaignModel;
