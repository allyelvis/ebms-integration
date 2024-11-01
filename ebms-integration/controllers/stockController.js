const express = require('express');
const axios = require('axios');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Post a stock movement
router.post('/add', auth, async (req, res) => {
  try {
    const { ebmsToken } = req.user;
    const stockData = req.body;

    const response = await axios.post(
      `${process.env.EBMS_BASE_URL}/addStockmovement`,
      stockData,
      {
        headers: {
          Authorization: `Bearer ${ebmsToken}`
        }
      }
    );

    if (response.data.status === 'success') {
      res.json({ message: 'Stock movement posted successfully' });
    } else {
      res.status(400).json({ message: 'Failed to post stock movement' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error posting stock movement', error: error.message });
  }
});

// Get stock movement by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const { ebmsToken } = req.user;
    const stockId = req.params.id;

    const response = await axios.get(
      `${process.env.EBMS_BASE_URL}/getStockmovement/${stockId}`,
      {
        headers: {
          Authorization: `Bearer ${ebmsToken}`
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stock movement', error: error.message });
  }
});

module.exports = router;
