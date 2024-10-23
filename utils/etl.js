const leadModel = require("../models/lead.model");
const campaignModel = require("../models/campaign.model");

async function performETL() {
  try {
    // Extract
    const leads = await leadModel.find().populate("campaignId"); // Fetch leads with campaign data
    const campaigns = await campaignModel.find(); // Fetch all campaigns

    // Transform
    const campaignMetrics = campaigns.map((campaign) => {
      const campaignLeads = leads.filter(
        (lead) => lead.campaignId._id.toString() === campaign._id.toString()
      );

      return {
        _id: campaign._id,
        campaignName: campaign.name,
        platform: campaign.platform,
        status: campaign.status,
        totalLeads: campaignLeads.length,
        budget: campaign.budget,
        clicks: campaign.clicks,
      };
    });

    return campaignMetrics;
  } catch (error) {
    console.error("ETL process failed", error);
  }
}

module.exports = { performETL };
