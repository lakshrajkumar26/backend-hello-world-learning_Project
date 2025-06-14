const mongoose =require("mongoose");
// new Schema
const personSchema = new mongoose.Schema({
    name : {
        required : true,
        type : String,
    },
    age: {
        type : Number,

    },

    work : {
        type : String,
        required :true,
        enum : ["worker","chef" , "waiter"],
    },
    mobile : {
        type : String,
    },
    email : {
      type : String,
      required: true,
      unique:true,
    },
    address : {
        type : String ,
    },
    salary : {
        type : Number ,
        required : true,
    }
});
//create model
const Person = mongoose.model('person',personSchema);
module.exports = Person;