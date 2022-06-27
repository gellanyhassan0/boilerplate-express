let express = require('express');
let app = express();


//console.log("Hello World")

var str = "Hello World"

app.get('/', function(req, res) {
  res.send(str);
});




































 module.exports = app;
