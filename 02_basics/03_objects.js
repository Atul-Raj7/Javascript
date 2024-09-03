// singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Atul",
    "Full name" : "Atul Raj",
    [mySym] : "mykey1",
    age: 18,
    location: "Kolkata",
    email: "atul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "atul@microsoft.com"
// Object.freeze(JsUser)
JsUser.age = 20 
// console.log(JsUser.age);


JsUser.greeting = function () {
    console.log("Hello JS User!!!");
    
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS User!!! ${this.name}`);
    
}

console.log(JsUser.greetingTwo());
