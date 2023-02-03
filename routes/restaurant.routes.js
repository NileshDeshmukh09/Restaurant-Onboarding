const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");
const validate = require("../middlewares/index");

// Add-Restaurant - post
router.post("/restaurant", [validate.validateRequest] , restaurantController.createRestaurant );

// // signin -post
// router.put("/auth/reset-password", authController.resetPassword)

// // signin -post
// router.post("/auth/signin", authController.signin)

module.exports = router