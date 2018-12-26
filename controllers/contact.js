const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator/check');

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
console.log('!!!!!!!!!!!!!',req.body.name);

  //contacts.push({ name: req.body.name });
  //console.log('!!!!!!!!!1',prodId);
    const name=req.body.name;
    const email=req.body.email;
    const number=req.body.number;
    
    const contact = new Contact({
      name:name,
      email:email,
      number:number,
      userId:req.user
    
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
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
    res.render('front', {
    pageTitle: 'Sign Up',
    path: '/signup',
    errorMessage: message,
    oldInput: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    isAuthenticated:false,
    validationErrors: []
  });

  //console.log('esgtrfhjk');
};

exports.postSignup=(req,res,next) =>{
  // console.log('wertfyuhijodcfvgbhn');
  // res.redirect('/login');
  const name=req.body.name;
  const email=req.body.email;
  const psw=req.body.psw;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('front', {
      path: '/signup',
      pageTitle: 'Signup',
      errorMessage: errors.array()[0].msg,
      oldInput: {
        email: email,
       psw: psw,
        pswcnfrm: req.body.pswcnfrmrd
      },
    isAuthenticated:false,
    validationErrors: errors.array()
    });
  }

  bcrypt
    .hash(psw, 12)

    .then(hashedPassword => {
      const user = new User({
        name: name,
        email: email,
        psw: hashedPassword,
        pswcnfrm: hashedPassword
      });
      return user.save();
    })
    .then(result => {
      res.redirect('/login');
      // return transporter.sendMail({
      //   to: email,
      //   from: 'shop@node-complete.com',
      //   subject: 'Signup succeeded!',
      //   html: '<h1>You successfully signed up!</h1>'
      // });
    })
    .catch(err => {
      console.log(err);
    });


//    User.findOne({email:email})
//    .then(userDoc =>{
//           if(userDoc){
//          req.flash('error','Existing User!');
//            return res.redirect('/signup');
//           }
//           return bcrypt.hash(psw, 12);
//         })
//         .then(hashedPassword => {
//   const user = new User({
//     name:name,
//     email:email,
//     psw:hashedPassword,
//     pswcnfrm:req.body.pswcnfrm
 
//   });
// return user.save()
// })
// .then(result => {
//   // console.log(result);
//   console.log('Signed Up');
//   res.redirect('/login');
// })
// .catch(err => {
//   console.log(err);
// });
};
// contact route

exports.getContact=(req, res, next) =>{
  console.log('23456789',req.user.email)
  Contact.find({userId:req.user._id})
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