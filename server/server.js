var express = require ('express');
var app = express ();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

 // Connect to Mongoose
 // Mohannad / guys //  please un commient the line below because its not running in my mac device
  // mongoose.connect('monogodb://localhost/test');
 var mongoClient = require('mongodb').MongoClient;
   mongoClient.connect("mongodb://localhost:27017/test", function(error, db) {
        if(!error){
             console.log("We are connected");
        }
        else
           console.dir(error);
    });

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});
var x = '<!DOCTYPE html>'
'<html>'
	'<head>'
		'<title>'
		'</title>'	
	'</head>'
			'<body>'
					'<form method="POST" enctype="multipart/form-data">'
						'<input type="file" name="myimage">'
						'<input type="submit" name="submit" value="submit">'
					'</form>'
			'</body>'
'</html>'
 var db = mongoose.connection;
 app.get('/',function (req,res) {
 	// console.log(req)
 	res.render(x)
 });

 app.listen(3000);
 console.log('Running at port 3000');
 module.exports = app;
