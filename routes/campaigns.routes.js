const express = require("express");
const router = express.Router();
const { getCampaigns } = require("../controllers/campaign.controller");

// Get all campaigns
router.get("/", getCampaigns);

module.exports = router;
