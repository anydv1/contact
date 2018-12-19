const path = require('path');

const express = require('express')
const rootDir = require('../util/path');
const authData = require('./auth');

const router = express.Router();

router.get('/add-contact', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-contact.html'));

});
router.post('/add-contact', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
 

});

// router.post('/login', (req, res, next) => {
//   contacts.push({ title: req.body.name,
//   email: req.body.email,
// });
//   res.redirect('/');
// });

module.exports = router;

//exports.contact  = contacts;