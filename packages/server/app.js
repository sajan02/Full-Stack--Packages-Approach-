const createError = require('http-errors');
const express = require('express');
const session = require( 'express-session' );
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('./init/db.js');
const moviesAnalysisRouter = require('./routes/moviesAnalysis');
const cors = require('cors');

const app = express();
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));   // to parse form data
app.use(session({
  secret: 'ssshhh'
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', moviesAnalysisRouter);

app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    "status_messsage":"something went wrong!" + err.message,
    "status_code":err.status||500
  });
});

module.exports = app;
