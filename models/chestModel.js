const mongoose = require('mongoose');
const validator = require('validator');

const chestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A wheel must have a name'],
    unique: true,
  },
  rarity: {
    type: String,
    enum: {
      values: ['common', 'rare', 'epic'],
      message: 'Rarity is either: common, rare, epic',
    },
    required: [true, 'Rarity is required'],
  },

  price: {
    type: Number,
    required: [true, 'A chest must have a price'],
  },
  contents: [
    {
      itemType: { type: String, enum: ['weapon', 'body', 'other'] },
      itemName: { type: String },
      rarity: { type: String },
      dropRate: { type: Number },
    },
  ],
});

// Create Model
const Chest = mongoose.model('Chest', chestSchema);

module.exports = Chest;
