const path = require('path');
const { check ,body} = require('express-validator/check');
const User = require('../models/user');

const express = require('express')
//const rootDir = require('../util/path');
//const authData = require('./auth');
//const contactList = require('./contact');

const productsController = require('../controllers/contact');


const router = express.Router();


router.get('/signup', productsController.getSignup);

router.post('/signup', 
[
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        // if (value === 'test@test.com') {
        //   throw new Error('This email address if forbidden.');
        // }
        // return true;
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject(
              'E-Mail exists already, please pick a different one.'
            );
          }
        });
      })
      .normalizeEmail(),
    body(
      'psw',
      'Please enter a password with only numbers and text and at least 5 characters.'
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body('pswcnfrm')
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.psw) {
          throw new Error('Passwords have to match!');
        }
        return true;
      })
  ],
productsController.postSignup);



 router.get('/login', productsController.getLogin);
 router.post('/login',
 [

    body('email')
    .isEmail()
    .withMessage('Please enter a valid email address.'),
  body('psw', 'Password has to be valid.')
    .isLength({ min:3 })
    .isAlphanumeric()
],
 productsController.postLogin);

 router.post('/logout', productsController.postLogout);

module.exports = router;



















// const path = require('path');

// const express = require('express');
// const contactList = require('./contact');

// const productsController = require('../controllers/contact');

// const router = express.Router();

// router.get('/signup',productsController.getSignup);

// router.post('/login',productsController.postSignup);

// module.exports = router;

// // router.get('/signup',productsController.getSignup);
// // router.post('/signup',productsController.postSignup);
// // router.get('/signup', (req, res, next) => {
// //   res.sendFile(path.join(__dirname, '../', 'views', 'front.html'));
// // });



// // router.post('/signup', (req, res, next) => {
// //   //res.redirect('/login');
// //   res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));

// // });
// // router.get('/login', (req, res, next) => {
// //     res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
// //   });
// //   router.post('/login', (req, res, next) => {
// //     res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
// //   });
// // router.post('/contact', (req, res, next) => {
// //     res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
// //   });

