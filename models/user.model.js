const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  partyName: {
    type: String,
    required: true,
    unique: false,
    trime: true
  }
});
