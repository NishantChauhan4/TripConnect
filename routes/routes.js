const express = require("express");
const isAuthenticated = require("../middleware/middleware");
const {
  renderLogin,
  renderSignup,
  travellerSignup,
  travellerLogin,
  logout,
} = require("../controller/controller");

const router = express.Router();

router.get("/", (req, res) => {
  const token = req.cookies ? req.cookies.token : null;

  if (!token) {
    res.render("index.ejs", { previousLogin: null });
  } else {
    res.render("index.ejs", { previousLogin: true });
  }
});

router.get("/login", renderLogin);

router.get("/signup", renderSignup);

router.post("/signup", travellerSignup);

router.post("/login", travellerLogin);

module.exports = router;
