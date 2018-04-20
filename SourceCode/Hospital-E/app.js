var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParse = require("body-parser")
var mongoose = require("mongoose");

var app = express();
/*
    Import Route modules
*/
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');
var newsRouter = require('./routes/news');
var datlichhenRouter = require('./routes/dat-lich-hen');
var infoDepartmentRouter = require('./routes/informations/information.department');
var infoDoctorRouter = require('./routes/informations/information.doctor');
var forumRouter = require('./routes/forum')
var informationRouter = require('./routes/infomation')

//End import routes

/*
    Connect Mongodb
*/
var mongoDB = "mongodb://127.0.0.1:27017/test_h"; //uri to database
mongoose.connect(mongoDB);

//End MongoDB

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParse.json())

/*
    Routes which should handle request
*/
app.use('/', indexRouter);
app.use('/login', loginRouter)
app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/news', newsRouter);
app.use('/infoDepartments', infoDepartmentRouter);
app.use('/infoDoctors', infoDoctorRouter);
app.use('/forum', forumRouter);
app.use('/dat-lich-hen', datlichhenRouter);
app.use('/gioi-thieu', informationRouter)

//end routes

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;