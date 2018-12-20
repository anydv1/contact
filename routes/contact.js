const path = require('path');


const express = require('express');
const rootDir = require('../util/path');

const authData = require('./auth');
const adminData = require('./admin');


const router = express.Router();
router.get('/',(req,res,next )  =>{
    console.log('admin.js', adminData.contacts);

    // res.status(404).send('<h1>Page not found</h1>');
   res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
     
 });


module.exports = router;
