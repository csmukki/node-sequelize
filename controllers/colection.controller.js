const Collection = require("../models/collection.model");

exports.getAddCollection = (req, res, next) => {
  res.sendFile("add-collection.ejs", {
    pageTitle: "collection form",
  });
};

exports.postAddCollection = (req, res, next) => {
  const { title } = req.body;
  Collection.create({
    title: title,
  })
    .then(() => {
      res.redirect("/add-collection");
    })
    .catch((err) => {
      console.log("Error creating collection: ", err);
    });
};
