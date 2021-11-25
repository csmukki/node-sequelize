const Sequelize = require("sequelize");

const db = require("../utils/database");

const Item = db.define("item", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: Sequelize.DOUBLE,
  imageUrl: Sequelize.STRING,
});

module.exports = Item;
