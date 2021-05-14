
module.exports = (sequelize, Sequelize) => {
  const Listing = sequelize.define("listing", {
    
    itemName: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    dayPrice: {
      type: Sequelize.DOUBLE,
    },
    weekPrice: {
      type: Sequelize.DOUBLE,
    },
    monthPrice: {
      type: Sequelize.DOUBLE,
    },
    itemValue: {
      type: Sequelize.DOUBLE,
    },
    zipCode: {
      type: Sequelize.INTEGER,
    },
    minRentalDays: {
      type: Sequelize.INTEGER,
    },
    images: {
      type: Sequelize.BLOB("long"),
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    
  });

  return Listing;
};
