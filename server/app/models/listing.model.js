// const uuid = require('uuid/v4')

module.exports = (sequelize, Sequelize) => {
  const Listing = sequelize.define("listing", {
    // id: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    //   primaryKey: true
    // },
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
  });

  return Listing;
};
