const path = require('path');


const express = require('express');
const rootDir = require('../util/path');

const authData = require('./auth');
const adminData = require('./admin');


const router = express.Router();
router.get('/contact',(req,res,next )  =>{
  res.redirect('/');

});


module.exports = router;
