var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');

var authorRouter = require('./routes/author');
var bookRouter = require('./routes/book');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/author', authorRouter);
app.use('/book', bookRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

module.exports = app;
