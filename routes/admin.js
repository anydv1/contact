const path = require('path');

const express = require('express')
const rootDir = require('../util/path');
const authData = require('./auth');
const contactList = require('./contact');


const router = express.Router();

router.get('/add-contact', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-contact.html'));
//console.log('wertyui',req.body.name);
});

router.post('/add-contact', (req, res, next) => {
 console.log("234567890",req.body);
 res.redirect('/');
});


module.exports = router;