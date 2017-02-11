var express = require ('express');
var app = express ();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

 // Connect to Mongoose
 // Mohannad / guys //  please un commient the line below because its not running in my mac device
 // mongoose.connect('monogodb://localhost/Rshots');

 var db = mongoose.connection;
 app.get('/',function (req,res) {
 	res.send('hello world')
 });

 app.listen(3000);
 console.log('Running at port 3000');
 module.exports = app;
