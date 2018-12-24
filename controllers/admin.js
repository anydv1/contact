const bcrypt = require('bcryptjs');

const Contact = require('../models/contact');
const User = require('../models/user');

const mongoose = require('mongoose');


exports.getEditContact = (req, res, next) => {
    const editMode = req.query.edit;
    console.log('wertyuiopp',req.query);
    if (!editMode) {
        //console.log('turn the   edit mode on')
      return res.redirect('/contact');
    }
    const prodId = req.params.contactId;
    console.log('WQERYTIUOP',prodId);
   Contact.findById(prodId)
      .then(contact => {
        if (!product) {
          return res.redirect('/');
        }
        res.render('/update', {
          pageTitle: 'Edit Contact',
          path: '/update',
          editing: editMode,
       contact: contact
        });
      })
      .catch(err => console.log(err));
  };


exports.postEditContact = (req, res, next) => {

  //const prodId = req.body._Id;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  const updatedNumber = req.body.number;

  
product.find({email : updatedEmail}).then(contact =>{
    contact.name=updatedName;
    contact.email=updatedEmail;
    contact.nuumber= updatedNumber;
      return contactt.save();
})
.then(result=>{
    console.log('updated contacts');
    res.redirect('/contact');
})
.catch(err =>{
    console.log(err);
});

};



// exports.getEditProduct = (req, res, next) => {
//     const editMode = req.query.edit;
//     if (!editMode) {
//       return res.redirect('/');
//     }
//     const prodId = req.params.productId;
//     Product.findById(prodId)
//       .then(product => {
//         if (!product) {
//           return res.redirect('/');
//         }
//         res.render('admin/edit-product', {
//           pageTitle: 'Edit Product',
//           path: '/admin/edit-product',
//           editing: editMode,
//           product: product
//         });
//       })
//       .catch(err => console.log(err));
//   };