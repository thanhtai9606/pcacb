var express = require("express");
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 4300)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))


//load routes

var home = require('./routes/home');

app.use('/', home);

var server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})