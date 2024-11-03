const express = require("express");
const isAuthenticated = require("../middleware/middleware");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

module.exports = router;
