const flash = require('connect-flash');

const path = require('path');

const express = require('express');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./models/user');

// const csrf = require('csurf');



const MongoDBStore = require('connect-mongodb-session')(session);

const MONGO_URL = 'mongodb://localhost:27017/contacts';

const app = express();
// app.use(function(req, res, next) {
//   res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
//   next();
// });
app.use(function(req, res, next) {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});
const store = new MongoDBStore({
  uri: MONGO_URL,
  collection: 'sessions'
});


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
 const contactRoutes = require('./routes/contact');
const signRoutes = require('./routes/auth');
app.use(flash());


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));
app.use
     (session({secret: 'secret',resave:false,saveUninitialized:false, store: store})
);
app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log('2134678wesrdtfyguhjikk',err));
});

app.use(adminRoutes);
app.use(signRoutes);
 app.use(contactRoutes);

app.use((req,res,next)=>{
 // console.log('fdfdfgghj');
     res.send('<h1> Page not found </h1>');
});


mongoose
  .connect(MONGO_URL,{useNewUrlParser:true})
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });

// mongoose.connect('mongodb://localhost:27017/contacts',{useNewUrlParser:true})
//   .then(result => {
//     app.listen(3000);
//   })
//   .catch(err => {
//     console.log(err);
//   });


//const routes = require('routes')
// mongoose.connect('mongodb://localhost:27017/contact')
//     app.listen(3000);

// //app.listen(3000);