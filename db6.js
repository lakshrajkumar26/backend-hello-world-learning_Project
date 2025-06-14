// 1/3
const mongoose = require("mongoose");

//2/3
const mongoURL ="mongodb://localhost:27017/demo1";


mongoose.connect(mongoURL, 
//     {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// }
);
// 3/3
const db = mongoose.connection;

db.on('connected' , ()=> {
    console.log(" connected successfully");
});
db.on( 'disconnected' , () => {
    console.log(" db has been disconnected ");
})
db.on( 'error' , (err) => {
  console.log( 'error is ' , err);
})
//export db connection 
module.exports = db;