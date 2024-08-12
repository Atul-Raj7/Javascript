// arrays


const arr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman","Power Rangers"]

// Arr  methods


// arr.push(6)
// arr.push(7)
// console.log(arr);
// arr.pop()
// console.log(arr);



// arr.unshift(9)
// console.log(arr);
// arr.shift()
// console.log(arr);


// console.log(arr.includes(9));
// console.log(arr.indexOf(9));

 
const newArr = arr.join()  // .join()  ->  changes the type of array into string

// console.log(newArr);


// slice , splice


console.log("A", arr);


const myn1 = arr.slice(1,3)

console.log(myn1);
console.log("B",arr);


const myn2 = arr.splice(1,3)

console.log(myn2);
console.log("C",arr);