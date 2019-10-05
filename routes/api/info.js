const express = require("express");
const router = express.Router();

const Info = require("../../models/Info");

// @route Post

router.post("/createprofile", (req, res) => {
  const newInfo = new Info({
    status: req.body.status,
    company: req.body.company,
    website: req.body.website,
    location: req.body.location,
    skills: req.body.skills,
    githubusername: req.body.githubusername,
    bio: req.body.bio,
    twitter: req.body.twitter,
    facebook: req.body.facebook,
    youtube: req.body.youtube,
    linkedin: req.body.linkedin,
    instagram: req.body.instagram
  });

  newInfo.save().then(res.redirect("/dashboard.html"));
});

module.exports = router;
