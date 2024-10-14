const CarBody = require('../models/carBodyModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllCarBody = catchAsync(async (req, res) => {
  const carbodys = await CarBody.find();

  //Send response
  res.status(200).json({
    status: 'success',
    results: carbodys.length,
    data: {
      carbodys,
    },
  });
});
