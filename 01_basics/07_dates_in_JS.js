// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 6, 15)
let myCreatedDate = new Date("2024-6-15")
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));




let newDate = new Date()

// console.log(newDate.getMonth());
// console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long"
})






