const Weapon = require('../models/weaponModel');

exports.getAllWeapon = async (req, res) => {
  const weapons = await Weapon.find();

  //Send response
  res.status(200).json({
    status: 'success',
    results: weapons.length,
    data: {
      weapons,
    },
  });
};
