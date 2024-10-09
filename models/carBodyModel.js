const mongoose = require('mongoose');
const validator = require('validator');

const bodySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A car body must have a name'],
    unique: true,
  },
  hp: {
    type: Number,
    min: [0, 'HP must be a positive number'],
  },
  level: {
    type: Number,
    default: 1,
    min: [1, 'Level must be greater than or equal to 1'],
  },
  slotNumber: {
    type: Number,
    min: [1, 'Slot number must be a non-negative number'],
  },
  rarity: {
    type: String,
    enum: {
      values: ['common', 'rare', 'epic'],
      message: 'Rarity is either: common, rare, epic',
    },
    required: [true, 'Rarity is required'],
  },

  powerCap: Number,
});

// Create Model
const CarBody = mongoose.model('Body', bodySchema);

module.exports = CarBody;
