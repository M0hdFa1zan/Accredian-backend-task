const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referralRoutes');
require('dotenv').config();
const db = require('./config/db');

const app = express();
app.use(cors({
  origin: 'https://accredian-backend-task-gnwr.onrender.com'
}));
app.use(bodyParser.json());
app.use('/api/refer', referralRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
