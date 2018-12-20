const path = require('path');

const express = require('express');

const bodyParser =require('body-parser');
const mongoose = require('mongoose');


const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
// const contactRoutes = require('./routes/contact');
// const signRoutes = require('./routes/auth');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
// app.use(signRoutes);
// app.use(contactRoutes);

app.use((req,res,next)=>{
    res.send('<h1> Page not found </h1>');
});




mongoose.connect('mongodb://localhost:27017/contacts',{useNewUrlParser:true})
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


//const routes = require('routes')
// mongoose.connect('mongodb://localhost:27017/contact')
//     app.listen(3000);

// //app.listen(3000);