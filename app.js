//const http = require('http');
const path = require('path');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const signRoutes = require('./routes/auth');
//const adminData = require('./routes/admin');
const adminRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');


app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use(signRoutes);
app.use(adminRoutes);
//app.use(adminData.routes);
app.use(contactRoutes);

app.use((req,res,next)=>{
    res.send('<h1> Page not found </h1>');
});



//const routes = require('routes')
mongoose.connect('mongodb://localhost:27017/contact')
    app.listen(3000);

//app.listen(3000);