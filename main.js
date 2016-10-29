'use scrict';
var express = require('express'),
    http = require('http'),
    app = express();

http.createServer(app).listen(8080, function(){
    console.log('Server listening on port ' + 8080);
});

app.get('/', function(req, res) {
  res.send('hello world');
});
