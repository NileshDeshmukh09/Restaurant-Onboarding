/**
* Schema for the user Model will be provided Here
*/
const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({

    restaurantName : {
        type: String,
        required: true,
    },

    contactName :{
        type : String,
        required : true,
    },

    pincode: {
        type: String,
        required: true,
    },

    location : {
        type: String,
        required: true
    },

    website : {
        type : String , 
        default : "Hey , I'm there on Blogging",
    },

    phoneNumber: {
        type: String,
        required: true
    },

    averageDailyTransactions : {
        type: Number,
        required: true
    }

});

/* These will automatically generates the created and updated fields */
RestaurantSchema.set('timestamps' , true);

module.exports = mongoose.model('Restaurant', RestaurantSchema);