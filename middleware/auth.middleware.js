const { default: axios } = require("axios");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;

const requireAuth = (req, res, next) => {
  let token = req.cookies.jwt;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, JWT_TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        res.redirect("/login");
      } else {
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, JWT_TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = "guest";
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    // res.locals.user = null;
    res.locals.user = "guest";
    next();
  }
};

const reCaptcha = async (req, res, next) => {
  const secret = process.env.RECAPTCHA_SECRET;
  const token = req.body.gRecaptchaToken;
  const VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
  if (token) {
    const result = await axios.post(VERIFY_URL, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    if (result?.data.score > 0.5) {
      console.log("next");
      next();
    } else {
      console.log("fail");
      res.status(200).json({
        status: "failure",
        message: "Google ReCaptcha Failure",
      });
    }
  }
};

module.exports = { requireAuth, checkUser, reCaptcha };
