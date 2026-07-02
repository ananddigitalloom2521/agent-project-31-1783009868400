const express = require('express');
const router = express.Router();
const messageModel = require('../models/index');

router.get('/', (req, res) => {
  const message = new messageModel({ title: 'Hello World', message: 'Hello World' });
  res.render('index', { title: message.title, message: message.message });
});

module.exports = router;