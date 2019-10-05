const express = require("express");

const router = express.Router();

const validateLoginInput = require("../../validation/login");
const validateRegisterInput = require("../../validation/register");

const User = require("../../models/User");

// @route GET api/alumini/register
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(404).json(req.body);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email Already Exists";
      return res.status(404).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      newUser
        .save()
        .then(user => res.redirect("/create-profile.html"))
        .catch(err => console.log(err));
    }
  });
});

// @route GET api/alumini/login
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check password
    if (password != user.password) {
      errors.password = "Password Doesnt Match";
      return res.status(404).json(errors);
    } else {
      res.redirect("/dashboard.html");
    }
  });
});

module.exports = router;
