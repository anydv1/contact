const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/signup', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'front.html'));
});
router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
  });
router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
  });

module.exports = router;