let express = require('express');
let app = express();


//console.log("Hello World")

var str = "Hello Express"

app.get('/', function(req, res) {
  res.send(str);
});

var absolutePath = __dirname + /views/index.html

app.get("/", function(req, res){ 
    res.sendfile(absolutePath);
});



































 module.exports = app;
