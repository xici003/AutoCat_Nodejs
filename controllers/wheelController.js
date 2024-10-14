const Wheel = require('../models/wheelModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllWheel = catchAsync(async (req, res) => {
  const wheels = await Wheel.find();

  //Send response
  res.status(200).json({
    status: 'success',
    results: wheels.length,
    data: {
      wheels,
    },
  });
});
