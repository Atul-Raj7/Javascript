// Value (Primitive)

// 7 types : String, Number, Boolean, null, undefined, Sysmbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

// Reference (Non primitive)

// Array, Object, Functions

const heros = ["shyaktiman", "Nagraaj","Doga"]  //array

//object
let myObj = {
    name: "Atul",
    age: 22,
}

//function 

const myFunction = function(){
    console.log("Hello World");
}









// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack (Primitive), Heap (Non-Primitive)

 let myYouTubename = "Atulrajdotcom"

 let anotherName = myYouTubename
 anotherName = "Xero"

 console.log(anotherName);
 console.log(myYouTubename);

// object is non-primitive(Heap). Which means when an object is called it goes to heap which returns the reference instead of copy.

 let userOne = {
    name: "Atul",
    email: "user@abc.com"
 }

 let userTwo = userOne

 userTwo.email = "atul@mail.com" 

 console.log(userOne);
 console.log(userTwo);