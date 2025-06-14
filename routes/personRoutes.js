const express = require("express");
const router = express.Router();
const Person =  require('../models/person7');


router.post('/person', async (req,res)=> {
    try{
         const data =  req.body // always the data comes from frontend stores in  req.body after body-parser 
     
         //this will create a empty Person 
         const newPerson = new Person(data);
          const response = await newPerson.save();
          console.log('data saved ');
          res.status(200).json(response);

          //  newPerson.save( (error) => {
    // to avaoid this much 
//    const newPerson = Person();
//    newPerson.name = Person.name,
//    newPerson.age = Person.age,
//    newPerson.salary = Person.salary,
//    newPerson.address = Person.address,
//    newPerson.mobile = Person.mobile,
//    newPerson.email = Person.email,
    }
    catch (error ) {

        console.log(error);
        res.status(500).json({error : "Internal Server error ",error});
    }
  })



  router.get('/find', async (req,res) => {
    try{
         const data = await Person.find();
         console.log("data fetched",data);
         res.status(200).json(data);
    }
    catch (error) {
           console.log("error found");
           res.status(500).json({error:"Internal Server Error"});
    }
  })


  //params  
  router.get( '/:workType' ,async(req ,res) => {
    const IsworkType = req.params.workType;
    try {
      if(IsworkType == 'chef' || IsworkType =="manager" || IsworkType == "waiter"){
        const data =   await Person.find({work : IsworkType});
        res.status(200).json(data);
        console.log("fetching successful");
      }
            else{
                res.status(500).json("Invalid input work Type")
            }
    }
    catch (error) {
        res.status(500).json("Internal Error Occured",error);
    }
  })

  // PATCH/PUT
  // --> Revision
  router.put('/:theid' , async(req,res) => {  //after :  anything is variable
    try{
       const Id = req.params.theid;
       const UpdatedData = req.body;

      const response = await Person.findByIdAndUpdate( Id , UpdatedData, {
        new : true, //Return the updated document
        runValidators : true, // Run Mongoose validator
       });
       if(!response){

        return res.status(404).json({error : 'Person not Found'});
       }

       console.log('data Updated');
       res.status(200).json(response);
    }
    catch (error){
      console.log("error occured");
      res.status(500).json({error : "unsuccessful in updating the id "})
   }
  })

  //To delete
  router.delete('/:id',async(req,res) => {
    try{
      const providedId = req.params.id;
      const response = await Person.findByIdAndDelete(providedId);
     if(!response){

        return res.status(404).json({error : 'Person not delete'});
       }
       
       console.log('data Updated and user deleted');
       res.status(200).json(response);
    }
    catch (error){
      console.log("error occured");
      res.status(500).json({error : "unsuccessful in updating the id "})
   }
    
    
  })

  module.exports = router;