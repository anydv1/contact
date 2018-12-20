const path = require('path');

const express = require('express');
const contactList = require('./contact');


const router = express.Router();
const productsController = require('../controllers/contact');

// router.get('/signup',productsController.getSignup);
// router.post('/signup',productsController.postSignup);
// router.get('/signup', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../', 'views', 'front.html'));
// });



// router.post('/signup', (req, res, next) => {
//   //res.redirect('/login');
//   res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));

// });
// router.get('/login', (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
//   });
//   router.post('/login', (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
//   });
// router.post('/contact', (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
//   });

module.exports = router;