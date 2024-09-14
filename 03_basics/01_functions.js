function sayMyName() {
    console.log("A");
    console.log("T");
    console.log("U");
    console.log("L");   
}       

sayMyName           // -> Function Reference
sayMyName()         // -> Function Execution


// function addNumbers(number1, number2) {
//     console.log(number1+number2);
// }
function addNumbers(number1, number2) {
    return number1 + number2
}

addNumbers(3,4)

const result = addNumbers(3,7)

// console.log("Result: ", result);


function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("Atul")) // Output: Atul just logged in
console.log(loginUserMessage()) // Output: undefined just logged in



function calculateCarPrice(val1,val2,...num1) {
    return num1
}


console.log(calculateCarPrice(200));              //Output: 200
console.log(calculateCarPrice(200,300,400));      //Output: [ 200, 300, 400 ]
console.log(calculateCarPrice(200,300,400,2000)); //Output: [ 400, 2000 ]  because 200,300 are stored in val1, val2

const user = {
    username: "Atul",
    age: 22
}

function handleObject(anyobject){
    console.log(`${anyobject.username} has recently turned ${anyobject.age}`)    
}

// handleObject(user)
handleObject({
    username: "Atul Raj",
    age: 24
})      

const myNewArray = [200,300,500,700]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myNewArray));
