const CarBody = require('../models/carBodyModel');

exports.getAllCarBody = async (req, res) => {
  const carbodys = await CarBody.find();

  //Send response
  res.status(200).json({
    status: 'success',
    results: carbodys.length,
    data: {
      carbodys,
    },
  });
};
