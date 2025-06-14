// var prompt = require("prompt-sync")();
// var input = prompt("Enter your number");
// console.log("number",input);

//automatic start function by its self  ( ()=>{} )(); 


(function (){
    console.log("Hi its loaded in the begineing ")
})();


// what is Callback

 function callback(){
    console.log("callback called");
}

function main (a,b , callback){
     sum = a + b ;
      console.log("sum" + sum)
      callback();
}
main (2,4,callback) ;


const Userinfo = require ("./Userinfo_Extra1.js");

console.log(Userinfo.info.name);
