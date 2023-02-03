const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");

// Add-Restaurant - post
router.post("/restaurant", restaurantController.createRestaurant );

// // signin -post
// router.put("/auth/reset-password", authController.resetPassword)

// // signin -post
// router.post("/auth/signin", authController.signin)

module.exports = router