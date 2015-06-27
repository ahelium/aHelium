var fs = require('fs');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');


var app = express();

var index = require('./app/routes/index');

app.set('views', __dirname + '/app/views');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/app/public')));

app.engine('html', require('ejs').renderFile);

// Routes 
app.get('/', index.home);


if (process.env.NODE_ENV === 'development') {
    app.listen(8000);
} else {
    app.listen(80);
}
