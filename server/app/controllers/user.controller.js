const db = require("../models");
const User = db.user;
const Project = db.project;


exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

