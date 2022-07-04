const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 32,
  },
  lastname: {
    type: "String",
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
  },
  address: {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      enum: ["USA", "Canada", "Brasil", "Mexico", "Cuba"],
    },
  },
  createdAt: {
    type: Date,
  }
});

module.exports = mongoose.model("users", userSchema);
