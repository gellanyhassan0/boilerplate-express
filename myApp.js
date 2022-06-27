let express = require('express');
let app = express();


//console.log("Hello World")

//var str = "Hello Express"


let assets = express.static(__dirname + "/public");
app.use("/public", assets);


var homepage = __dirname + "/views/index.html";
app.get('/', function(req, res) {
  //res.send(str + "\n");
  res.sendFile(homepage);
});

app.get('/json',function(req,res){
  if(process.env.MESSAGE_STYLE === "uppercase")
    res.json({"message": "HELLO JSON"});
  else
  res.json({"message": "Hello json"});
});





























 module.exports = app;
