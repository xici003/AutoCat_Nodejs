const express = require('express');
const playerController = require('../controllers/playerController');

const router = express.Router();

router
  .route('/')
  .get(playerController.getAllPlayer)
  .post(playerController.createPlayer);

router.route('/:id').get(playerController.getPlayer);

module.exports = router;
