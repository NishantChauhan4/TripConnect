const express = require("express");
const isAuthenticated = require("../middleware/middleware");
const {
  renderLogin,
  renderSignup,
  travellerSignup,
  travellerLogin,
  logout,
  search,
  addTrip,
} = require("../controller/controller");

const router = express.Router();

router.get("/", (req, res) => {
  const token = req.cookies ? req.cookies.token : null;

  if (!token) {
    res.render("index.ejs", { previousLogin: null, tripsFound: [] });
  } else {
    res.render("index.ejs", { previousLogin: true, tripsFound: [] });
  }
});

router.get("/login", renderLogin);

router.get("/signup", renderSignup);

router.post("/signup", travellerSignup);

router.post("/login", travellerLogin);

router.get("logout", logout);

router.post("/search", isAuthenticated, search);

module.exports = router;
