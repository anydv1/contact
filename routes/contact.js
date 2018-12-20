const path = require('path');

const express = require('express');
const authData = require('./auth');
const addminData = require('./admin');


const router = express.Router();
router.get('/',(req,res,next )  =>{
    // res.status(404).send('<h1>Page not found</h1>');
   res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
     
 });


module.exports = router;
