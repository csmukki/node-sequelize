const Sequelize = require("sequelize");

const db = require("../utils/database");

const Collection = db.define("collection", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Collection;
