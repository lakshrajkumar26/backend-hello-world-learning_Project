var express = require("express");
const app = express();
const db = require('./db6');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const personRoutes = require('./routes/personRoutes');
const MenuRoutes = require("./routes/menuRoutes");

app.get( "/", function(req ,res){
    res.send("hi bro send");
});



 
//sending json 
app.get("/menudemo" , (req ,res)=> {
    const food = {
        name : "sambar",
        size : 10,
        isSouthIndian : true,
                }
                res.send(food)
})



app.use('/person' ,personRoutes); // means at /person take to personRoutes
app.use('/menu' ,MenuRoutes );


app.listen (3000 ,()=> {
    console.log("server is running at 3000")
});