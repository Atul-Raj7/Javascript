const email = []
if(email) {
    console.log('Got the mail');
}
else {
    console.log("Didn't got the mail");
}

// falsy va;ues

// false, 0, -0, BingInt On, "", null, undefined, Nan

// truthy values

// "0", 'false', " ", [], {}, function(){}  (string k aandar kuch v hoga toh that's true)


// if (email.length === 0) {
//     console.log("Array is empty");
    
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {            // (Object.keys(emptyObj) -> this will return the value in array
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1

val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15

val = 10 ?? 20 ?? 30


// console.log(val);
// console.log(val1);
// console.log(val2);
// console.log(val3);

// Ternary Operator

 const iceTeaPrice = 100

 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
 