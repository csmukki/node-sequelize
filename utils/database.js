const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecommerce", "root", "@Mukki1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
