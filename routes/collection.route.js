const express = require("express");

const router = express.Router();

const collectionController = require("../controllers/colection.controller");

router.get("/add-collection", collectionController.getAddCollection);
router.post("/add-collection", collectionController.postAddCollection);

module.exports = router;
