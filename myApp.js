let express = require('express');
let app = express();
require('dotenv').config();

//console.log("Hello World") 

app.use((req, res, next) => {

 let string = `${req.method} ${req.path} - ${req.ip}`
 console.log(string) 
   
  next();

});



//var str = "Hello Express"


let assets = express.static(__dirname + "/public");
app.use("/public", assets);


var homepage = __dirname + "/views/index.html";
app.get('/', function(req, res) {
  //res.send(str + "\n");
  res.sendFile(homepage);
});

app.get('/json',function(req,res){
  if(process.env.MESSAGE_STYLE === "uppercase"){
    res.json({"message": "HELLO JSON"}); }
    
else{
  res.json({"message": "Hello json"});
}

});

app.get('/now', function(req,res, next){
  
  next();
}, function(req, res){
 var time =  new Date()
  console.log('time'+time);
  res.json({'time': time});
}
       );

app.get("/:word/echo", (req, res) => {
  let word = req.params.word
  
  let jsonObj = {echo: word,echo: word};
  res.send(jsonObj);
});





























 module.exports = app;
