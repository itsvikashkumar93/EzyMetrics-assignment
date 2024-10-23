const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./config/db");
require("dotenv").config();
const leadRoutes = require("./routes/leads.routes");
const campaignRoutes = require("./routes/campaigns.routes");
const etlRoutes = require("./routes/etl.routes");
const reportRoutes = require("./routes/report.routes");
const { generateDummyData } = require("./utils/generateDummyData");
// Connect to MongoDB
connectDB();
// Generate dummy data
generateDummyData();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/leads", leadRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/etl", etlRoutes);
app.use("/api/report", reportRoutes);

app.listen(process.env.PORT || 3000);
