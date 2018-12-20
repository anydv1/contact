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
