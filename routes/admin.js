const path = require('path');

const express = require('express')
const rootDir = require('../util/path');
const authData = require('./auth');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
  //res.status(404).send('<h1>Page not found</h1>');

});
// router.post('/login', (req, res, next) => {
//   contacts.push({ title: req.body.name,
//   email: req.body.email,
// });
//   res.redirect('/');
// });

module.exports = router;
//exports.contact  = contacts;