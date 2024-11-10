const mongoose = require("mongoose");

const travellerSchema = new mongoose.Schema({
  name: String,
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
  name: String,
  username: String,
  password: String,
  mobile: Number,
  email: String,
  address: String,
  businessname: String,
  gstnumber: Number,
  iatanumber: Number,
});

const planner = mongoose.model("planner", plannerSchema);

const tripSchema = new mongoose.Schema({
  name: String,
  username: String,
  mobile: Number,
  email: String,
  from: String,
  to: String,
  date: String,
  duration: String,
  price: Number,
});

const trip = mongoose.model("trip", tripSchema);

module.exports = { traveller, planner, trip };
