const Wheel = require('../models/wheelModel');

exports.getAllWheel = async (req, res) => {
  const wheels = await Wheel.find();

  //Send response
  res.status(200).json({
    status: 'success',
    results: wheels.length,
    data: {
      wheels,
    },
  });
};
