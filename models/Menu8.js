const mongoose = require("mongoose");

 const MenuSchema =  new mongoose.Schema({

    name: {
        type : String,
        required : true
    },
    price : {
        type :Number,
        required : true,
    },
    taste :{
        type : String,
        //
        enum :  ["hot" , "spices" , "sauce"],
    },
    is_drink : {
           type : Boolean,
           default : false,
    },
    ingredients : {
        type : [String],
    },
    num_sales : {
         type : Number,
         default : 0,
    }
 })

 const Menu  = mongoose.model("menu8", MenuSchema);
 module.exports = Menu ;