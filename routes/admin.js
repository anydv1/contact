const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
  //res.status(404).send('<h1>Page not found</h1>');

});

module.exports = router;