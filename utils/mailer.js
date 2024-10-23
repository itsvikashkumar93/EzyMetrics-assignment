const nodemailer = require("nodemailer");
require("dotenv").config();

// Setup email configuration
const auth = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send alert email
const sendAlertEmail = async (campaign, recipientEmail) => {
  const receiver = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: `Alert: Campaign ${campaign.campaignName} Over Budget`,
    text: `The campaign ${campaign.campaignName} has exceeded its budget of ${campaign.budget}.`,
  };

  try {
    await auth.sendMail(receiver);
    console.log("Alert email sent successfully!");
  } catch (error) {
    console.error("Failed to send alert email:", error);
  }
};

// Export the email function
module.exports = { sendAlertEmail };
