var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));
app.get('/',function(req,res){
	res.send('hello Ru');
});
app.listen(7000, function(){
		console.log("I am the best on 7000");
});