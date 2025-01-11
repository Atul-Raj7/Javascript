// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is: ${greet}`);
    
}

const map = new Map()
map.set("IN","India")
map.set("PAK","Pakistan")
map.set("Fr","France")
map.set("CN","China")

// console.log(map);

for (const key of map){
  //  console.log(key); // will print in an array form
    
}

for (const [key, value] of map){
    console.log(key,':-',value); // will print like normal text
    
}
