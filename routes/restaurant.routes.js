const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");
const validate = require("../middlewares/index");

// Add-Restaurant - POST
router.post("/restaurant", [validate.validateRequest] , restaurantController.createRestaurant );

// Get-All-Restaurant - GET
router.get("/restaurant", restaurantController.getAllRestaurant)


module.exports = router