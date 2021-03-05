const db = require("../models");
const Listing = db.listings;
const Op = db.Sequelize.Op;


// Create and Save a new Listing:

exports.create = (req, res) => {
  // Validate request
  if (!req.body.itemName) {
    res.status(400).send({
      message: "Item name can not be empty!"
    });
    return;
  }

  // Create a Listing
  const listing = {
    itemName: req.body.itemName,
    category: req.body.category,
    description: req.body.description,
    dayPrice: req.body.dayPrice,
    weekPrice: req.body.weekPrice,
    monthPrice: req.body.monthPrice,
    itemValue: req.body.itemValue,
    zipCode: req.body.zipCode,
    minRentalDays: req.body.minRentalDays,
    images: req.body.images,
  };

  // Save Listing in the database
  Listing.create(listing)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listing."
      });
    });
};

// Retrieve all Tutorials/ find by title from the database:

