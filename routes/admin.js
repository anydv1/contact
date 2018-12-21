const path = require('path');

const express = require('express')
//const rootDir = require('../util/path');
//const authData = require('./auth');
//const contactList = require('./contact');
const productsController = require('../controllers/contact');
//const adminController = require('../controllers/admin');


const router = express.Router();
router.get('/add-contact', productsController.getAddcontact);
router.post('/add-contact', productsController.postAddcontact);




router.get('/contact', productsController.getContact);

router.get('/update', productsController.getUpdate);
//router.post('/update', adminController.postUpdate);

module.exports = router;


// const contacts =[];

// router.get('/add-contact', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../', 'views', 'add-contact.html'));
// //console.log('wertyui',req.body.name);
// });

// router.post('/add-contact', (req, res, next) => {
// //  console.log("234567890",req.body);
// contacts.push({
//   name: req.body.name,
//   email: req.body.email,
//   number:req.body.number

// });
//  res.redirect('/');
// });


// exports.routes = router;
// exports.contacts = contacts;
