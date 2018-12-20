//const http = require('http');
const path = require('path');
const bodyParser =require('body-parser');

const express = require('express');
const app = express();

const signRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const contactRoutes = require('./routes/contact');


app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use(signRoutes);
app.use(adminRoutes);
app.use(contactRoutes);

app.use((req,res,next)=>{
    res.send('<h1> Page not found </h1>');
});



//const routes = require('routes')

app.listen(3000);