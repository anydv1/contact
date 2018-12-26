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

exports.postEditContact= (req, res) => {
  console.log('req.body', req.body);
  const updatedname = req.body.name.trim();
  const updatednumber = req.body.number.trim();
  const oldemail = req.body.email.trim();

 console.log('345678',updatedname, updatednumber, oldemail, typeof(oldemail), oldemail.length);

  Contact.findOne({email: oldemail})
    .then(contact=> {

      console.log("cpnncccccccccc", contact);
      if(contact){
        contact.name= updatedname;
        contact.number= updatednumber;
        contact.save().then(resp =>{
         // res.redirect('/contact');
            
          console.log("resp", resp)
          return res.send({status : true, message : "data save successfully"})

        }).catch(err =>{
          console.log("errrrrrr", err);
          return res.send({status : false, message : "Internal server error"})
  
        });
      }
    
    }).catch(err => {
      console.log('vvvvvvvvvvvvv', err);
    })
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




exports.getProfile = (req, res, next) => {
  const CurrentUser = req.body.email;
  console.log('2222222222222',req.body.user)
  User.find()
  .then(users =>{
  res.render('profile', {
    pageTitle: 'My Profile',
    path: '/profile',
    prods: users,
    editing:true,
    isAuthenticated:req.session.isLoggedIn,
     email: CurrentUser
     
  })
  });
  //console.log('QWERTYUi');
};


exports.postDeleteContact= (req, res, next) => {
  const prodId = req.body.contacttId;
  Contact.findOneAndDelete(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/contact');
    })
    .catch(err => console.log(err));
};

