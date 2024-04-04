const express = require("express");
const route = express.Router();
const authController = require("../controller/auth.controller");
const {
  signupValidation,
  loginValidation,
} = require("../validation/auth/auth.validation");

route.post("/signup", [signupValidation], authController.signUp);
route.post("/login", [loginValidation], authController.login);
module.exports = route;
