//const http = require('http');
const path = require('path');
const bodyParser =require('body-parser');

const express = require('express');
const app = express();

const signRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use("",signRoutes);
app.use("/admin",adminRoutes);



//const routes = require('routes')
app.use((req,res,next )  =>{
    res.status(404).send('<h1>Page not found</h1>');
    
});
app.listen(3000);