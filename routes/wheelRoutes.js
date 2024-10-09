const express = require('express');
const wheelController = require('../controllers/wheelController');

const router = express.Router();

router.route('/').get(wheelController.getAllWheel);

//router.route('/:id').get(playerController.getPlayer);

module.exports = router;
