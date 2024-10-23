const express = require("express");
const { performETL } = require("../utils/etl");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const path = require("path");
const { sendAlertEmail } = require("../utils/mailer");
const leadModel = require("../models/lead.model"); // Import the lead model

const router = express.Router();

// Endpoint to generate CSV report
router.get("/generate", async (req, res) => {
  try {
    const metrics = await performETL(); // Fetch transformed data

    // Define CSV writer
    const csvWriter = createCsvWriter({
      path: "./reports/campaign_metrics.csv",
      header: [
        { id: "campaignName", title: "Campaign Name" },
        { id: "platform", title: "Platform" },
        { id: "status", title: "Status" },
        { id: "totalLeads", title: "Total Leads" },
        { id: "budget", title: "Budget" },
        { id: "clicks", title: "Clicks" },
      ],
    });

    // Write CSV data
    await csvWriter.writeRecords(metrics);

    // Fetch the relevant leads
    const leads = await leadModel.find(); // Fetch all leads

    // Send email notifications for campaigns that exceed budget
    for (const campaign of metrics) {
      if (campaign.budget > 1000) {
        const lead = leads.find(
          (lead) => String(lead.campaignId) === String(campaign._id)
        ); // Find the lead linked to the campaign
        if (lead) {
          await sendAlertEmail(campaign, lead.email); // Send alert email using lead's email
        }
      }
    }

    // Send the file as download
    const filePath = path.join(__dirname, "../reports/campaign_metrics.csv");
    res.download(filePath);
  } catch (error) {
    console.error("Error generating report:", error);
    res.status(500).json({ message: "Error generating report" });
  }
});

module.exports = router;
