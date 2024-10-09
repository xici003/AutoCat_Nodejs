const mongoose = require('mongoose');
const validator = require('validator');

const wheelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A wheel must have a name'],
    unique: true,
  },
  level: {
    type: Number,
    default: 1,
    min: [1, 'Level must be greater than or equal to 1'],
  },
  hp: {
    type: Number,
    min: [0, 'HP must be a positive number'],
  },
  rarity: {
    type: String,
    enum: {
      values: ['common', 'rare', 'epic'],
      message: 'Rarity is either: common, rare, epic',
    },
    required: [true, 'Rarity is required'],
  },

  size: {
    type: Number,
    enum: {
      values: ['small', 'medium', 'large'],
    },
  },
});

// Create Model
const Wheel = mongoose.model('Wheel', wheelSchema);

module.exports = Wheel;
