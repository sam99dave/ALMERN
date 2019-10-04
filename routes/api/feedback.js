const express = require("express");
const router = express.Router();

const FeedBack = require("../../models/Feedback");

// @route POST api/feeback/submit
router.post("/submit", (req, res) => {
  const newFeedback = new FeedBack({
    feedback: req.body.feedback,
    name: req.body.name
  });

  newFeedback.save();
});

module.exports = router;
