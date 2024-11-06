const express = require("express");
const isAuthenticated = require("../middleware/middleware");
const { login, signup } = require("../controller/controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/login", login);

router.get("/signup", signup);

module.exports = router;
