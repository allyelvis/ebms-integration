const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const response = await axios.post(`${process.env.EBMS_BASE_URL}/login`, {
      username: process.env.EBMS_USERNAME,
      password: process.env.EBMS_PASSWORD
    });

    const ebmsToken = response.data.token;
    if (!ebmsToken) {
      return res.status(401).json({ message: 'Login failed' });
    }

    const token = jwt.sign({ ebmsToken }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
});

module.exports = router;
