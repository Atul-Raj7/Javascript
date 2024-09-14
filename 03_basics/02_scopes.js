// let a = 10
// const b =  20
// var c = 30
let a = 300
if(true){
    let a = 10
    const b =  20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);

// console.log(a);

// {} -> If this is used with functions, if-else then it's called Scope. And if used solely it's object

function one() {
    const username = "Atul"

    function two() {
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);
    two()
} 

// one()

if (true) {
    const username = "Atul"
    if (username === "Atul") {
        const website = "YouTube"
        // console.log(username + website);
    }
    // console.log(website);
}   
// console.log(username);



//   ++++++ Hoisting ++++++   //

addOne(5)                     // It'll run even shifting it to before the function initialisation
function addOne(num) {
    return num + 1
}


addTwo(7)                     // It WONT run if shifted before the function initialisation
const addTwo = function(num){
    return num + 2
}

