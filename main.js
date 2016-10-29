'use scrict';
var express = require('express'),
    http = require('http'),
    conf = require('./conf'),
    app = express();

var server = http.createServer(app);
server.listen(conf.get('port'), function(){
    console.log('Server listening on port ' + conf.get('port'));
});

app.set('views', __dirname + '/views/');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('basic');
});
