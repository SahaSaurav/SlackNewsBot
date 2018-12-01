const express     = require('express');
const router      = express.Router();

// Fetch Data
router.get('/news', (req, res) => {
  // API Request to CNN
})

// Post to Slack
router.post('/slack', (req, res) => {
  // Slack Webhook URL to post message
})

module.exports = router;
