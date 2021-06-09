const dotenv = require('dotenv');
const path = require('path');
dotenv.config({
  path: path.resolve('./'+ process.env.NODE_ENV + '.env')
});

module.exports = {
  

    HOST: process.env.DATABASE_HOST,
    USER: process.env.DATABASE_USER,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DB: process.env.DATABASE,
    dialect: "mysql",
    dialectOptions:{
      ssl: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };