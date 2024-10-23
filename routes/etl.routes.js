const express = require("express");
const router = express.Router();
const { performETL } = require("../utils/etl");

// Run ETL process
router.get("/run", async (req, res) => {
  try {
    await performETL();
    res.status(200).send("ETL Process Completed");
  } catch (error) {
    res.status(500).json({ message: "ETL Process Failed", error });
  }
});

module.exports = router;
