let express = require('express');
let app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

/** body parser and get data from post */
app.use(bodyParser.urlencoded({extended: false}))
app.post('/name', (req, res) => {
  let name = req.body.first + ' ' + req.body.last;
  res.json({name: name});
});

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
/** https://boilerplate-express.gellany.repl.co/:word/echo */
app.get("/:word/echo", (req, res) => {
  let word = req.params.word
  
  let jsonObj = {echo: word,echo: word};
  res.send(jsonObj);
});

/** actual_request_URL: 'name?first=5461&last=4561' */
/** https://boilerplate-express.gellany.repl.co */ 
/** name?first=5461&last=4561 */
/** name?first=<firstname>&last=<lastname> */
app.get('/name', (req, res) => {
  let first = req.query.first;
  let last = req.query.last;
  
  let jsonObj = { name: `${first} ${last}` };
  res.send(jsonObj);
  });




























 module.exports = app;
