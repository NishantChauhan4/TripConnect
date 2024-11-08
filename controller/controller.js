const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { traveller } = require("../model/model");

const login = (req, res, next) => {
  res.render("login.ejs");
};

const signup = (req, res, next) => {
  res.render("signup.ejs", { username: null });
};

const newSignup = (req, res, next) => {
  res.redirect("/");
};

module.exports = {
  login,
  signup,
  newSignup,
};
