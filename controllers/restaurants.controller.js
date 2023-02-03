const Restaurant = require('../models/restaurant.model');


// Create a new restaurant
const createRestaurant = async (req, res) => {

    const restaurant = new Restaurant({
        restaurantName: req.body.restaurantName,
        contactName: req.body.contactName,
        pincode: req.body.pincode,
        location: req.body.location,
        website: req.body.website,
        phoneNumber: req.body.phoneNumber,
        averageDailyTransactions: req.body.averageDailyTransactions
    });

    try {
        const newRestaurant = await restaurant.save();
        res.status(201).send({
            success: true,
            newRestaurant
        });
    } catch (err) {
        console.log(err);
        res.status(400).send({
            success: false,
            message: err.message
        });
    }
};

