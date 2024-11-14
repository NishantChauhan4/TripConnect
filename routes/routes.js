const express = require("express");
const isAuthenticated = require("../middleware/middleware");
const {
  renderLogin,
  renderLoginTraveler,
  renderLoginPlanner,
  renderSignup,
  renderSignupTraveler,
  renderSignupPlanner,
  travelerSignup,
  plannerSignup,
  travelerLogin,
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

router.get("/login/traveler", renderLoginTraveler);

router.get("/login/planner", renderLoginPlanner);

router.get("/signup", renderSignup);

router.get("/signup/traveler", renderSignupTraveler);

router.get("/signup/planner", renderSignupPlanner);

router.post("/signup/traveler", travelerSignup);

router.post("/signup/planner", plannerSignup);

router.post("/login", travelerLogin);

router.get("logout", logout);

router.post("/search", isAuthenticated, search);

module.exports = router;
