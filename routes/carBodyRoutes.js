const express = require('express');
const carBodyController = require('../controllers/carBodyController');

const router = express.Router();

router.route('/').get(carBodyController.getAllCarBody);

//router.route('/:id').get(playerController.getPlayer);

module.exports = router;
