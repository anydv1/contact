const bcrypt = require('bcryptjs');

const Contact = require('../models/contact');
const User = require('../models/user');

const mongoose = require('mongoose');


exports.getAddcontact = (req, res, next) => {
  Contact.find()
  .then(contacts =>{
  res.render('add-contact', {
    pageTitle: 'Add Contact',
    path: '/add-contact',
    prods: contacts,
    editing:true,
    isAuthenticated:req.session.isLoggedIn
  })
  });
  //console.log('QWERTYUi');
};


exports.postAddcontact = (req, res, next) => {
//console.log('!!!!!!!!!!!!!',req.body);

  //contacts.push({ name: req.body.name });
  //console.log('!!!!!!!!!1',prodId);
     const prodId = req.body.contactId;
    const name=req.body.name;
    const email=req.body.email;
    const number=req.body.number;
    console.log('456788',prodId);
    const contact = new Contact({
      prodId:prodId,
      name:name,
      email:email,
      number:number
    
    });
contact.save()
  .then(result => {
    // console.log(result);
    console.log('Created contact',contact);
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
   errorMessage: req.flash('error'),
// errorMessage: req.flash('error'),
     editing:true,
    isAuthenticated:false


  });
  //console.log('esgtrfhjk');
};

exports.postSignup=(req,res,next) =>{
  // console.log('wertfyuhijodcfvgbhn');
  // res.redirect('/login');
  const name=req.body.name.trim();
  const email=req.body.email.trim();
  const psw=req.body.psw.trim();
  const pswcnfrm=req.body.pswcnfrm.trim();
   User.findOne({email:email})
   .then(userDoc =>{
          if(userDoc){
         req.flash('error','Existing User!');
           return res.redirect('/signup');
          }
          return bcrypt.hash(psw, 12);
        })
        .then(hashedPassword => {
  const user = new User({
    name:name,
    email:email,
    psw:hashedPassword,
    pswcnfrm:hashedPassword
 
  });
return user.save()
})
.then(result => {
  // console.log(result);
  console.log('Signed Up');
  res.redirect('/login');
})
.catch(err => {
  console.log(err);
});
};
// contact route
exports.getContact=(req, res, next) =>{
  Contact.find()
  .then(contacts =>{
    //console.log(contacts);
  
  res.render('contact',{
    prods:contacts,
    pageTitle:'Contacts',
    path:'/contact',
    isAuthenticated:req.session.isLoggedIn

  });
})
  // console.log('get contactsssssssssss');
};


//login get/post

exports.getLogin=(req, res, next) =>{
  res.render('login',{
    pageTitle:'Log In',
    path: '/login',
    isAuthenticated:false,
errorMessage: req.flash('error')

  });
};

exports.postLogin = (req, res, next) => {
  const name=req.body.name;
  const email=req.body.email;
  const psw=req.body.psw;


  User.findOne({ email: email })
    .then(user => {
      if (!user) {
         req.flash('error','Invalid email or password');
        return res.redirect('/login');
      }
      bcrypt
        .compare(psw, user.psw)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/contact');
            });
          }
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/login');
  });
};

// exports.postLogin=(req, res, next)  =>{
//   console.log('retdfyughijk');
//   res.redirect('/contact');
// };



  // console.log('get contactsssssssssss');