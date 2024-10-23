const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }, // Contact info
  status: { type: String, required: true }, // Lead status (e.g., 'new', 'contacted', 'converted')
  source: { type: String, required: true }, // Lead source (e.g., 'organic', 'paid', 'referral')
  campaignId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "campaign", // Linking lead to a specific campaign
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const leadModel = mongoose.model("lead", leadSchema);

module.exports = leadModel;
