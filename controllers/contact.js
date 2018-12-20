const Contact = require('../models/contact');
const mongoose = require('mongoose');


exports.getAddcontact = (req, res, next) => {
  res.render('add-contact', {
    pageTitle: 'Add Contaact',
    path: '/add-contact',
    editing:true

  });
  //console.log('QWERTYUi');
};


exports.postAddcontact = (req, res, next) => {
//console.log('!!!!!!!!!!!!!',req.body);

  //contacts.push({ name: req.body.name });
  //console.log('!!!!!!!!!1',req.body.name);
    const name=req.body.name;
    const email=req.body.email;
    const number=req.body.number;
    const contact = new Contact({
      name:name,
      email:email,
      number:number
    
    });
contact.save()
  .then(result => {
    // console.log(result);
    console.log('Created contact');
    res.redirect('/contact');
  })
  .catch(err => {
    console.log(err);
  });
};


exports.getSignup = (req, res, next) => {
  res.render('front', {
    pageTitle: 'Sign Up',
    path: '/signup',
    editing:true

  });
  console.log('esgtrfhjk');
};

// exports.postSignup-=(req,res,next) =>{
//   console.log('wertfyuhijodcfvgbhn');
//   res.redirect('/login');
// };

exports.getContact=(req, res, next) =>{
  res.render('contact',{
    pageTitle:'Contacts',
    path:'/contact'
  });
  console.log('get contactsssssssssss');
};

exports.getLogin=(req, res, next) =>{
  res.render('login',{
    pageTitle:'Log In',
    path: '/login'
  });
};

// exports.postLogin=(req, res, next)  =>{
// res.redirect('/contact');
// };
