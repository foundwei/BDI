/**
 * @fileoverview BDI(Big Data based Intelligence) Project.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-24)
 */

var http = require('http');
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

// user defined package
var categories = require('./routes/rest/categories');
var locations = require('./routes/rest/locations');
var snlogs = require('./routes/rest/snlogs');
var persons = require('./routes/rest/persons');
var psrelations = require('./routes/rest/psrelations');
var relations = require('./routes/rest/relations');
var ships = require('./routes/rest/ships');
var sites = require('./routes/rest/sites');
var users = require('./routes/rest/users');

var csg = require('./routes/rest/csg');
var facebook = require('./routes/rest/facebook');
var linkedin = require('./routes/rest/linkedin');
var twitter = require('./routes/rest/twitter');
var officialinfo = require('./routes/rest/officialinfo');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public folder
app.use(favicon(path.join(__dirname, 'client', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

// rest api mapping
app.use('/rest/categories', categories);
app.use('/rest/locations', locations);
app.use('/rest/snlogs', snlogs);
app.use('/rest/persons', persons);
app.use('/rest/psrelations', psrelations);
app.use('/rest/relations', relations);
app.use('/rest/sites', sites);
app.use('/rest/ships', ships);
app.use('/rest/users', users);

app.use('/rest/csg', csg);
app.use('/rest/facebook', facebook);
app.use('/rest/linkedin', linkedin);
app.use('/rest/twitter', twitter);
app.use('/rest/officialinfo', officialinfo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler, will print stacktrace
if(app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler, no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var server = http.createServer(app);
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at ", addr.address + ":" + addr.port);
});

module.exports = app;