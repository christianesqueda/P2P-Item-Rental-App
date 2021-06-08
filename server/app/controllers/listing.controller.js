const db = require("../models");
const Listing = db.listings;
const Op = db.Sequelize.Op;

// Create and Save a new Listing:

exports.create = (req, res) => {


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
    userId: req.body.userId,
  };


  // Save Listing in the database
  Listing.create(listing)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listing.",
      });
    });
};

// Retrieve all listings
exports.findAll = (req, res) => {
  const userId = req.query.userId;
  var condition = userId ? { userId: { [Op.like]: `${userId}` } } : null;

  Listing.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving listings.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Listing.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Listing was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Listing with id=${id}. Maybe Project was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Project with id=" + id,
      });
    });
};

// Update Listing info table
exports.update = (req, res) => {
  const id = req.params.id;

  Listing.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Listing Info was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Listing Info with id=${id}. Maybe Listing Info was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Listing Info with id=" + id,
      });
    });
};
