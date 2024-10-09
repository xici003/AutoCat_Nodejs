const mongoose = require('mongoose');
const validator = require('validator');

const weaponSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A weapon must have a name'],
    unique: true,
  },
  level: {
    type: Number,
    default: 1,
    min: [1, 'Level must be greater than or equal to 1'],
  },
  rarity: {
    type: String,
    enum: {
      values: ['common', 'rare', 'epic'],
      message: 'Rarity is either: common, rare, epic',
    },
    required: [true, 'Rarity is required'],
  },

  attackType: {
    type: String,
    enum: {
      values: ['close-ranged attack', 'ranged attack'],
    },
  },
  attackSpeed: {
    type: Number,
    min: [0, 'Attack Speed must be a non-negative number'],
  },
  power: {
    type: Number,
    min: [0, 'Power must be a non-negative number'],
  },
  damage: {
    type: Number,
    min: [0, 'Damage must be a non-negative number'],
  },
});

// Create Model
const Weapon = mongoose.model('Weapon', weaponSchema);

module.exports = Weapon;
