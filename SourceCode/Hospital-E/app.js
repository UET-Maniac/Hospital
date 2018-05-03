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
var loginRouter = require('./routes/login');
var infoDepartmentRouter = require('./routes/informations/department');
var infoDoctorRouter = require('./routes/informations/doctor');
var infoAllUserRouter = require('./routes/informations/allUser');
var asCreateRouter = require('./routes/appointmentSchedules/create');
var asHistoryRouter = require('./routes/appointmentSchedules/history');
var asListRouter = require('./routes/appointmentSchedules/list');
var recordUserRouter = require('./routes/records/user');
var recordMedicalRouter = require('./routes/records/medicalRecord');
var recordPatientRouter = require('./routes/records/patient');
var forumRouter = require('./routes/forum');
var newsRouter = require("./routes/news");
var ratingRouter = require("./routes/rating");
var userRouter = require("./routes/user");

//End import routes

var middlewareToken = require('./middlewares/token');

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
app.use('/gioi-thieu/khoa', middlewareToken, infoDepartmentRouter);
app.use('/gioi-thieu/bac-si', middlewareToken, infoDoctorRouter);
app.use('/gioi-thieu/tai-khoan', middlewareToken, infoAllUserRouter);
app.use('/dat-lich-hen/dat-moi', middlewareToken, asCreateRouter);
app.use('/dat-lich-hen/lich-su', middlewareToken, asHistoryRouter);
app.use('/dat-lich-hen/lich-hen', middlewareToken, asListRouter);
app.use('/ho-so/tai-khoan', middlewareToken, recordUserRouter);
app.use('/ho-so/benh-an', middlewareToken, recordMedicalRouter);
app.use('/ho-so/benh-nhan', middlewareToken, recordPatientRouter);
app.use('/dien-dan', middlewareToken, forumRouter);
app.use('/tin-tuc', middlewareToken, newsRouter);
app.use('/danh-gia', middlewareToken, ratingRouter);
app.use('/thong-tin-nguoi-dung', middlewareToken, userRouter);
//end routes

// nếu dùng middleware cho tất cả lại sai????
// app.use(middlewareToken);

// catch 404 and forward to error handler
app.use(middlewareToken, function(req, res, next) {
    // next(createError(404));
    res.render('pages/error',
        { objectType: req.objectType, message: 'Not found!', codeError: 404});
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