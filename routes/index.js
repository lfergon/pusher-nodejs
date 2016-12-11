const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { pusher_app_key : process.env.PUSHER_APP_KEY });
});

module.exports = router;