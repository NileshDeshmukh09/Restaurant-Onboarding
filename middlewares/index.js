/**
 *  custom middleware for verifying the request body
 */

const validateRequest = async (req,res, next) =>{

    //Validate Restaurant
    if( !req.body.restaurantName ){
        return res.status(400).send(
            "restaurantName is not provided"
        )
    }

    //Validate contact
    if(! req.body.contactName){
        return res.status(400).send(
           "UserID is not provided"
        )
    }

    /** Validate Pincode */
    if( !req.body.pincode ){
       return res.status(400).send( "pincode is Not provided" )
   }

   
   /** validate the location if it Exists */  
   if( !req.body.location ){
       return res.status(400).send("Password is not provided")
   }
   
    next(); // give the controll to the controller
}

module.exports = {
    validateRequest
}