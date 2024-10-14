const Player = require('../models/playerModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllPlayer = catchAsync(async (req, res) => {
  const players = await Player.find();

  //Send response
  res.status(200).json({
    status: 'success',
    results: players.length,
    data: {
      players,
    },
  });
});

exports.getPlayer = catchAsync(async (req, res, next) => {
  const player = await Player.findById(req.params.id);
  if (!player) {
    return next(new AppError('No found player with ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      player: player,
    },
  });
});

exports.createPlayer = catchAsync(async (req, res) => {
  const newPlayer = await Player.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      player: newPlayer,
    },
  });
});
