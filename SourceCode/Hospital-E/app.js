var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParse = require("body-parser")
var mongoose = require("mongoose");
var config = require('./config.json');

var app = express();
/*
    Import Route modules
*/
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');
var infoDepartmentRouter = require('./routes/informations/information.department');
var infoDoctorRouter = require('./routes/informations/information.doctor');
var forumRouter = require('./routes/forum');
var appointmentRouter = require('./routes/appointmentSchedule');
var infoAllUserRouter = require('./routes/informations/information.alluser');
var newsRouter = require("./routes/news")


//End import routes

var middlewareToken = require('./middlewares/token.middleware');

/*
    Connect Mongodb
*/
mongoose.connect(config.db);

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
app.use('/', middlewareToken,indexRouter);
app.use('/dang-nhap', loginRouter)
app.use('/tai-khoan', middlewareToken, userRouter);
app.use('/gioi-thieu/khoa', middlewareToken, infoDepartmentRouter);
app.use('/gioi-thieu/bac-si', middlewareToken, infoDoctorRouter);
app.use('/gioi-thieu/tai-khoan', middlewareToken, infoAllUserRouter);
app.use('/dien-dan', middlewareToken, forumRouter);
app.use('/dat-lich-hen', middlewareToken, appointmentRouter);
app.use('/tin-tuc', middlewareToken, newsRouter)

//end routes

// nếu dùng middleware cho tất cả lại sai????
// app.use(middlewareToken);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    // next(createError(404));
    res.render('pages/error',
        { objectType: config.viewer, message: 'Not found!', codeError: 404});
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