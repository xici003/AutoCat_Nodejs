const mongoose = require('mongoose');
const validator = require('validator');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
    validate: [validator.isAlpha, 'Tour name must only contain characters'],
  },
  email: {
    type: String,
    required: [true, 'Please tell us your email!'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  userName: {
    type: String,
    unique: true,
    trim: true, //remove blanks
    maxlength: [20, 'A username must have less or equal then 20 characters'],
    minlength: [5, 'A username must have more or equal then 5 characters'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: 'Your password are not the same',
    },
  },
  gold: {
    type: Number,
    default: 0,
  },
  trophy: {
    type: Number,
    default: 0,
  },

  isMatching: {
    type: Boolean,
    default: false,
  },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
