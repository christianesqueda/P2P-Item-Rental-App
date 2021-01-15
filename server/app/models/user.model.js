const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {

    user_name: {
      type: Sequelize.STRING,
    },

    f_name: {
      type: Sequelize.STRING,
    },
    l_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },

    password: {
      type: Sequelize.STRING,
    }
  });

  return User;
};
