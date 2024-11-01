const express = require('express');
const axios = require('axios');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Post an invoice
router.post('/add', auth, async (req, res) => {
  try {
    const { ebmsToken } = req.user;
    const invoiceData = req.body;

    const response = await axios.post(
      `${process.env.EBMS_BASE_URL}/addInvoice`,
      invoiceData,
      {
        headers: {
          Authorization: `Bearer ${ebmsToken}`
        }
      }
    );

    if (response.data.status === 'success') {
      res.json({ message: 'Invoice posted successfully', signature: response.data.electronicSignature });
    } else {
      res.status(400).json({ message: 'Failed to post invoice' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error posting invoice', error: error.message });
  }
});

// Get an invoice by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const { ebmsToken } = req.user;
    const invoiceId = req.params.id;

    const response = await axios.get(
      `${process.env.EBMS_BASE_URL}/getInvoice/${invoiceId}`,
      {
        headers: {
          Authorization: `Bearer ${ebmsToken}`
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching invoice', error: error.message });
  }
});

module.exports = router;
