let express = require('express');
let app = express();


//console.log("Hello World")

//var str = "Hello Express"

var homepage = __dirname + "/views/index.html";
app.get('/', function(req, res) {
  //res.send(str + "\n");
  res.sendFile(homepage);
});

let assets = express.static(__dirname + "/public/style.css");
//app.use(assets);
app.use(assets, middlewareFunction)




































 module.exports = app;
