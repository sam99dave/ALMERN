const express = require("express");
const router = express.Router();

const FeedBack = require("../../models/Feedback");

// @route POST api/feeback/submit
router.post("/submit", (req, res) => {
  const newFeedback = new FeedBack({
    feedback: req.body.feedback,
    email: req.body.email
  });

  newFeedback.save().then(res.redirect("/dashboard.html"));
});

module.exports = router;
