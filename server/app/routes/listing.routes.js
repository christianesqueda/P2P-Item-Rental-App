module.exports = app => {
    const listings = require("../controllers/listing.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Listing
    router.post("/", listings.create);
  
    // Retrieve all Listings
    router.get("/", listings.findAll);
  
  
    // // Retrieve a single Listing with id
    // router.get("/:id", listings.findOne);
  
    // // Update a Listing with id
    router.put("/:id", listings.update);
  
    // // Delete a Listing with id
    router.delete("/:id", listings.delete);
  
    // // Delete all Listings
    // router.delete("/", listings.deleteAll);
  
    app.use('/api/listings', router);
  };