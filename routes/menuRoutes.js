const express =  require("express");
const router = express.Router();
const Menu = require('../models/Menu8');

router.post( '/', async(req ,res) => {
    try{
        const data = req.body;
        const newfood = new Menu(data);
        const response = await newfood.save();
       
        res.status(200).json(response);
        console.log("seccessful");
    }
    catch(error){
        console.log( "error occurred");
        res.status(500).json("Internal error",error)
    }  
})

router.get("/findfood" , async (req,res) => {

    try{
        const data = await Menu.find();
        res.status(200).json(data);
        console.log("successfully listed datas");
    }

    catch (error) {
        console.log("unsuccessful");
        res.status(500).json("Internal error Occured:",error)
    }
})
router.get('/:tasteType', async (req , res) => {
    const Istaste = req.params.tasteType;
    try{
         if(Istaste == 'hot' || Istaste == 'spices' || Istaste == 'sauce'){
        const data = await Menu.find({taste : Istaste})
        res.status(200).json(data);
      }
      else{
        res.status(500).json("Invalid input work Type")
      }
    }
    catch(error) {
       console.log(error ,"error occurred");
        res.status(500).json("Internal Server Error",error);
    }
   

})
module.exports = router;