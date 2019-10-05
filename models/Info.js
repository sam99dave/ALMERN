const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
  status: {
    type: String
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  skills: {
    type: String
  },
  githubusername: {
    type: String
  },
  bio: {
    type: String
  },
  twitter: {
    type: String
  },
  facebook: {
    type: String
  },
  youtube: {
    type: String
  },
  linkedin: {
    type: String
  },
  instagram: {
    type: String
  }
});

module.exports = Info = mongoose.model("info", InfoSchema);
