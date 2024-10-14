const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandle = require('./controllers/errorController');

const playerRouter = require('./routes/playerRoutes');
const carBodyRouter = require('./routes/carBodyRoutes');
const weaponRouter = require('./routes/weaponRoutes');
const wheelRouter = require('./routes/wheelRoutes');

const app = express();

// 1. MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(morgan('dev'));

//Cần để chuyển đổi dữ liệu client post
app.use(express.json());

// Truy cập vào static file
app.use(express.static(`${__dirname}/public`));

// Chuyển đến middleware tiếp theo hoặc đến route handle và end
app.use((req, res, next) => {
  console.log('From app.js');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/players', playerRouter);
app.use('/api/v1/carbodys', carBodyRouter);
app.use('/api/v1/weapons', weaponRouter);
app.use('/api/v1/wheels', wheelRouter);

// Can't find this URL in server
app.all('*', (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl} on this server`);
  // err.status = 'fail';
  // err.statusCode = 404;
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Middleware handling Error
app.use(globalErrorHandle);

module.exports = app;
