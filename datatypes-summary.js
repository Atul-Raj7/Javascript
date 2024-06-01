// Primitive

// 7 types : String, Number, Boolean, null, undefined, Sysmbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

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
