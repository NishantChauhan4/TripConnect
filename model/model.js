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

const plannerSchema = new mongoose.Schema({
  username: String,
  password: String,
  mobile: Number,
  email: String,
  city: String,
  state: String,
  businessname: String,
  gstnumebr: Number,
  iatanumber: Number,
});

const planner = mongoose.model("planner", plannerSchema);

module.exports = { traveller, planner };
