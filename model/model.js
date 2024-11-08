const mongoose = require("mongoose");

const travellerSchema = new mongoose.Schema({
  username: String,
  password: String,
  age: Number,
  gender: String,
  mobile: Number,
  email: String,
  city: String,
  state: String,
});

const traveller = mongoose.model("traveller", travellerSchema);

module.exports = { traveller };
