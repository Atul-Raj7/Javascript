const accountId = 144553
let accountEmail = "atul@google.com"
var accountPass =  "12345"
accountCity = "Kolkata" 
let accountState

// accountId = 2 // not allowed

accountEmail = "arar@ar.com"
accountPass = "414141"
accountCity = "Jaipur"

console.log(accountId);


/*
Prefer not use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState]);