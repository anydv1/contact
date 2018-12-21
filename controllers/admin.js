const bcrypt = require('bcryptjs');

const Contact = require('../models/contact');
const User = require('../models/user');

const mongoose = require('mongoose');


exports.getUpdate=(req, res, next) =>{
  
    res.render('update',{
      pageTitle:'Upadte',
      path:'/update'
    });
  };

exports.postUpdate = (req, res, next) => {
  //const prodId = req.body._Id;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  const updatedNumber = req.body.number;
  
product.findById(prodId).then(contact =>{
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