// Global dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var consolidate = require('consolidate');
var nunjucks = require('nunjucks');

// Local dependencies
var router = require('./routes');

// Create app instance
var app = express();

// view engine setup
// Set the location of our views directory
app.set('views', path.join(__dirname, 'views'));
// Pass consolidate a reference to nunjucks so it knows
// which engine to use
nunjucks.configure('views');
consolidate.requires.nunjucks = nunjucks;
// Assign nunjucks engine for .html files
app.engine('html', consolidate.nunjucks);
// Set html as the default view engine
app.set('view engine', 'html');


// Middlewares setup
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize routes
router.init(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// initialize the server on a given port
app.listen(8080, function () {
  console.log('App is good to go, listening on port 8080')
})


module.exports = app;
