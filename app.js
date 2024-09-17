const express = require('express');
const morgan = require('morgan');

const playerRouter = require('./routes/playerRoutes');

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

app.use('/api/v1/characters', playerRouter);

module.exports = app;
