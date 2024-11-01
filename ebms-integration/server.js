require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./controllers/authController');
const invoiceRoutes = require('./controllers/invoiceController');
const stockRoutes = require('./controllers/stockController');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/stock', stockRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
