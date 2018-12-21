//const bcrypt = require('bcryptjs');

const Contact = require('../models/contact');
const User = require('../models/user');

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
  //console.log('esgtrfhjk');
};

exports.postSignup=(req,res,next) =>{
  console.log('wertfyuhijodcfvgbhn');
  // res.redirect('/login');
  const name=req.body.name;
  const email=req.body.email;
  const psw=req.body.psw;
  const pswcnfrm=req.body.pswcnfrm;

  const user= new User({
    name:name,
    email:email,
    psw:psw,
    pswcnfrm:pswcnfrm
  
  });
user.save()
.then(result => {
  // console.log(result);
  console.log('Signed Up');
  res.redirect('/login');
})
.catch(err => {
  console.log(err);
});
};

exports.getContact=(req, res, next) =>{
  Contact.find()
  .then(contacts =>{
    console.log(contacts);
  
  res.render('contact',{
    prods:contacts,
    pageTitle:'Contacts',
    path:'/contact'
  });
})
  // console.log('get contactsssssssssss');
};

exports.getLogin=(req, res, next) =>{
  res.render('login',{
    pageTitle:'Log In',
    path: '/login'
  });
};

exports.postLogin=(req, res, next)  =>{
  console.log('retdfyughijk');
  res.redirect('/contact');
};


exports.getUpdate=(req, res, next) =>{
  
  res.render('update',{
    pageTitle:'Upadte',
    path:'/update'
  });
};
  // console.log('get contactsssssssssss');