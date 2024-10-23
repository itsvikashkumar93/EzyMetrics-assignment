const campaignModel = require("../models/campaign.model");
const leadModel = require("../models/lead.model");

const generateDummyData = async () => {
  const existingCampaigns = await campaignModel.find();

  // If campaigns exist, do not insert new dummy data
  if (existingCampaigns.length > 0) {
    console.log("Dummy data already exists. Skipping data generation.");
    return;
  }

  // Sample campaigns to associate leads with
  const campaigns = [
    {
      name: "Campaign A",
      platform: "Facebook",
      budget: 1500,
      status: "active",
      clicks: 120,
    },
    {
      name: "Campaign B",
      platform: "Google",
      budget: 900,
      status: "completed",
      clicks: 200,
    },
    {
      name: "Campaign C",
      platform: "Instagram",
      budget: 800,
      status: "paused",
      clicks: 75,
    },
  ];

  // Insert campaigns into the database
  await campaignModel.insertMany(campaigns);
  console.log("Campaigns created successfully!");

  // Fetch the created campaigns to get their IDs
  const createdCampaigns = await campaignModel.find();

  // Sample leads data
  const leads = [
    {
      name: "Alice Johnson",
      email: "vikashjangir8270@gmail.com",
      status: "new",
      source: "organic",
      campaignId: createdCampaigns[0]._id, // Linking to Campaign A
    },
    {
      name: "Bob Smith",
      email: "vikashjangir8270@gmail.com",
      status: "contacted",
      source: "paid",
      campaignId: createdCampaigns[1]._id, // Linking to Campaign B
    },
    {
      name: "Charlie Brown",
      email: "vikashjangir8270@gmail.com",
      status: "converted",
      source: "referral",
      campaignId: createdCampaigns[2]._id, // Linking to Campaign C
    },
    {
      name: "David Wilson",
      email: "vikashjangir8270@gmail.com",
      status: "new",
      source: "organic",
      campaignId: createdCampaigns[0]._id, // Linking to Campaign A
    },
    {
      name: "Eva Green",
      email: "vikashjangir8270@gmail.com",
      status: "new",
      source: "paid",
      campaignId: createdCampaigns[1]._id, // Linking to Campaign B
    },
  ];

  // Insert leads into the database
  await leadModel.insertMany(leads);
  console.log("Leads created successfully!");
};

module.exports = { generateDummyData };
