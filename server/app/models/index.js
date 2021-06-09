const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB || process.env.DATABASE_P, 
  dbConfig.USER || process.env.DATABASE_USER_P, 
  dbConfig.PASSWORD  || process.env.DATABASE_PASSWORD_P, {
  host: dbConfig.HOST || process.env.DATABASE_HOST_P,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.listings = require("./listing.model.js")(sequelize, Sequelize);


module.exports = db;