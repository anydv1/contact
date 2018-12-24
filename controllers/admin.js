const bcrypt = require('bcryptjs');

const Contact = require('../models/contact');
const User = require('../models/user');

const mongoose = require('mongoose');


// exports.getEditContact = (req, res, next) => {
//     // const editMode = req.query.edit;
//     // console.log('wertyuiopp',req.query);
//     // if (!editMode) {
//     //     //console.log('turn the   edit mode on')
//     //   return res.redirect('/contact');
//     // }
//     const prodId = req.params.contactId;
//     console.log('WQERYTIUOP',prodId);
//    Contact.findById(prodId)
//       // .then(contact => {
//         // if (!contact) {
//         //   return res.redirect('/');
//         // }
//         res.render('/update', {
//           pageTitle: 'Edit Contact',
//           path: '/update',
//           // editing: editMode,
//        contact: contact
//         }
//       //   });
//       // })
//       // .catch(err => console.log(err));
//   // };

exports.getEditContact = (req, res, next) => {
  const prodId = req.params.contactId;

  Contact.findById(prodId)
  .then(contacts =>{
  res.render('update', {
    pageTitle: 'edit contact',
    prods:contacts,
    path: '/update',
    editing:true
  });
  }).catch(err =>{
    console.log(err);
  });
  //console.log('QWERTYUi');
};

exports.postEditContact= (req, res, next) => {
  const prodId = req.body.contactId;
  const updatedname = req.body.name;
  const updatedemail= req.body.email;
  const updatednumber = req.body.number;
 console.log('345678',prodId);

  Contact.findById(prodId)
    .then(contacts => {
      contacts.name= updatedname;
    contacts.email=updatedemail;
      contacts.number= updatednumber;
      return contact.save();
    })
    .then(result => {
      console.log('UPDATED!');
      res.redirect('/contact');
    })
    .catch(err => console.log(err));
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