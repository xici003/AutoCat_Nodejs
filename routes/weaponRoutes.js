const express = require('express');
const weaponController = require('../controllers/weaponController');

const router = express.Router();

router.route('/').get(weaponController.getAllWeapon);

//router.route('/:id').get(playerController.getPlayer);

module.exports = router;
