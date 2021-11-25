const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const db = require("./utils/database");

const Collection = require("./models/collection.model");
const Item = require("./models/item.model");
const User = require("./models/user.model");

const collectionRoute = require("./routes/collection.route");

const app = express();

const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "views")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", collectionRoute);

// Associations:
Collection.belongsTo(User);
User.hasMany(Collection);

Item.belongsTo(Collection);
Collection.hasMany(Item);

db.sync()
  .then(() => {
    console.log("Connection to database is successfull...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port);
