const Weapon = require('../models/weaponModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllWeapon = catchAsync(async (req, res) => {
  const weapons = await Weapon.find();

  //Send response
  res.status(200).json({
    status: 'success',
    results: weapons.length,
    data: {
      weapons,
    },
  });
});
