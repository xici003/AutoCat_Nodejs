const Player = require('../models/playerModel');

exports.getAllPlayer = async (req, res) => {
  const players = await Player.find();

  //Send response
  res.status(200).json({
    status: 'success',
    results: players.length,
    data: {
      players,
    },
  });
};

exports.getPlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        player: player,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'No found player with ID',
    });
  }
};

exports.createPlayer = async (req, res) => {
  try {
    const newPlayer = await Player.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        player: newPlayer,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
