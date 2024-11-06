const login = (req, res, next) => {
  res.render("login.ejs");
};

const signup = (req, res, next) => {
  res.render("signup.ejs");
};

module.exports = {
  login,
  signup,
};
