var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
// var mongo = require('mongodb'); 
var app = express();
var todos = ["Test"];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// var db = mongoose.connection;
// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var userRouter = require('./api/user/userRoute');
var userDataRouter = require('./api/userdata/userdataRoute');
var categoryRouter = require('./api/category/categoryRoute');



app.use('/user',userRouter);
app.use('/userData',userDataRouter);
app.use('/category',categoryRouter);



app.use(function(err,req,res,next){
    if(err){
        res.status(500).send(error);
    }
});

//Middleware => Backbone of express, a series of callback which allow us to build our api
//it has req obj, response obj.
//has to call next() otherwise it will hang


// all these routes are middlewares, they have a next function
app.get('/',function(req,res){
    fs.readFile('index.html',function(err,buffer){
        var html = buffer.toString();
        res.setHeader('Content-type','text/html');
        res.send(html);
    });
    


    // res.sendFile(__dirname + '/index.html',function(err){
    //     if(err){
    //         res.status(500).send(err);
    //     }
    // });
});

app.get('/todos',function(req,res){
	console.log('Heeey!');
	res.json(todos);
});


app.listen(3000);