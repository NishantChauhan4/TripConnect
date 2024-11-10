const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { traveller, planner, trip } = require("../model/model");

const renderLogin = (req, res) => {
  res.render("login.ejs");
};

const renderSignup = (req, res) => {
  res.render("signup.ejs");
};

const renderSignupTraveler = (req, res) => {
  res.render("signup(traveler).ejs", { userTaken: null });
};

const renderSignupPlanner = (req, res) => {
  res.render("signup(planner).ejs", { userTaken: null });
};

const travelerSignup = async (req, res) => {
  try {
    const reqName = req.nody.name;
    const reqUsername = req.body.username;
    const reqPassword = req.body.password;
    const reqAge = req.body.age;
    const reqGender = req.body.gender;
    const reqMobile = req.body.mobile;
    const reqEmail = req.body.email;
    const reqCity = req.body.city;
    const reqState = req.body.state;
    const hashedPassword = await bcrypt.hash(reqPassword, 10);

    const userFound = await traveller.findOne({ username: reqUsername });

    if (userFound != null && reqUsername === userFound.username) {
      res.render("signup(traveler).ejs", {
        userTaken: "Username already taken",
      });
    } else {
      await traveller.create({
        name: reqName,
        username: reqUsername,
        password: hashedPassword,
        age: reqAge,
        gender: reqGender,
        mobile: reqMobile,
        email: reqEmail,
        city: reqCity,
        state: reqState,
      });

      res.send("Traveler sign up successful");
      // res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
};

const plannerSignup = async (req, res) => {
  try {
    const reqName = req.body.name;
    const reqUsername = req.body.username;
    const reqPassword = req.body.password;
    const reqMobile = req.body.mobile;
    const reqEmail = req.body.email;
    const reqAddress = req.body.address;
    const reqBusinessname = req.body.businessname;
    const reqGstNumber = req.body.gstnumber;
    const reqIataNumber = req.body.iatanumber;
    const hashedPassword = await bcrypt.hash(reqPassword, 10);

    const userFound = await planner.findOne({ username: reqUsername });

    if (userFound != null && reqUsername === userFound.username) {
      res.render("signup(traveler).ejs", {
        userTaken: "Username already taken",
      });
    } else {
      await planner.create({
        name: reqName,
        username: reqUsername,
        password: hashedPassword,
        mobile: reqMobile,
        email: reqEmail,
        address: reqAddress,
        businessname: reqBusinessname,
        gstnumber: reqGstNumber,
        iatanumber: reqIataNumber,
      });

      res.send("Planner sign up successful");
      // res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
};

const travelerLogin = async (req, res) => {
  try {
    const reqUsername = req.body.username;
    const reqPassword = req.body.password;

    const userFound = await traveller.findOne({
      username: reqUsername,
    });

    if (
      userFound != null &&
      (await bcrypt.compare(reqPassword, userFound.password))
    ) {
      const token = jwt.sign(
        {
          username: reqUsername,
          previousLogin: true,
        },
        "key",
        {
          expiresIn: "3d",
        }
      );

      res.cookie("token", token, {
        maxAge: 3 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      res.redirect("/");
    } else {
      res.send("Invalid login credentials");
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

const search = async (req, res) => {
  try {
    const reqSearch = req.body.search;

    const tripsFound = await trip.find({
      from: reqSearch,
    });

    const token = req.cookies ? req.cookies.token : null;

    if (!token) {
      res.render("index.ejs", { previousLogin: null, tripsFound: tripsFound });
    } else {
      res.render("index.ejs", { previousLogin: true, tripsFound: tripsFound });
    }
  } catch (error) {
    console.log(error);
  }
};

const addTrip = async (req, res) => {
  const reqName = req.body.name;
  const reqUsername = req.userData.username;
  const reqMobile = req.body.mobile;
  const reqEmail = req.body.email;
  const reqFrom = req.body.from;
  const reqTo = req.body.to;
  const reqDate = req.body.date;
  const reqDuration = req.body.duration;
  const reqPrice = req.body.price;

  await trip.create({
    name: reqName,
    username: reqUsername,
    mobile: reqMobile,
    email: reqEmail,
    from: reqFrom,
    to: reqTo,
    date: reqDate,
    duration: reqDuration,
    price: reqPrice,
  });

  // res.redirect()
};

module.exports = {
  renderLogin,
  renderSignup,
  renderSignupTraveler,
  renderSignupPlanner,
  travelerSignup,
  plannerSignup,
  travelerLogin,
  logout,
  search,
  addTrip,
};
