const express =require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/**
 * Setup the mongodb connection 
 */
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL, (err)=>{

    if(err){
        console.log(err);
    }else{
        console.log("Connected to MongoDB !");  
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Restraunt server has started on the port http://localhost:${ process.env.PORT }` );
})