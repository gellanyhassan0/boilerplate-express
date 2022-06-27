let express = require('express');
let app = express();


//console.log("Hello World")

var str = "Hello Express"

app.get('/', function(req, res) {
  res.send(str);
});




































 module.exports = app;
