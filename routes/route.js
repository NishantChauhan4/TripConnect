const express = require("express");
const isAuthenticated = require("../middleware/middleware");
const {
  home,
  signup,
  login,
  create,
  userLogin,
} = require("../controller/controller");

const router = express.Router();

router.get("/", home);

router.get("/signup", signup);

router.get("/login", login);

router.post("/signup", create);

router.post("/login", userLogin);

module.exports = router;
