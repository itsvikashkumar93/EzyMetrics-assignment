# EzyMetrics Backend

## Overview

The EzyMetrics backend is designed to simulate the integration of a CRM and marketing platform by providing an API service that handles lead and campaign data. It includes functionalities for fetching, transforming, and reporting metrics while also sending email alerts for specific conditions.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
  - [Campaigns](#campaigns)
  - [Leads](#leads)
  - [ETL](#etl)
  - [Reports](#reports)
- [Email Notifications](#email-notifications)
- [License](#license)

## Features

- Simulates fetching lead and campaign data using dummy data(Please update the emails of all leads in './utils/generateDummyData.js' to check the email notifications).
- Utilizes MongoDB for data storage and management.
- Implements an ETL (Extract, Transform, Load) process for data processing.
- Generates CSV reports for campaign metrics.
- Sends email notifications when campaigns exceed their budget.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- CSV Writer

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <your-github-repo-link>
   cd ezy-metrics-backend
   ```

2. **Install Dependencies**
   npm install

3. **Setup Environment Variables Create a .env file in the root directory with the following content:**
   MONGODB_URI=<your_mongodb_connection_string>
   EMAIL_SERVICE=<your_email_service>
   EMAIL_USER=<your_email>
   EMAIL_PASS=<your_email_password>

4. **Run the Application**
   npx nodemon app.js

## API Endpoints

- **GET** `/api/campaigns`: Fetch all campaigns
- **GET** `/api/leads`: Fetch all leads
- **GET** `/api/etl/run`: Run the ETL process
- **GET** `/api/report/generate`: Generate a report

## Email Notifications

- Email alerts are sent when campaigns exceed their budget.
