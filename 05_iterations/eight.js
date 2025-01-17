const myNum = [1,2,3]

const myTotal = myNum.reduce( (accumulator, currentValue) => {
    console.log(`acc: ${accumulator} and currVal: ${currentValue}`);
    return accumulator + currentValue
}, 0)  // 0 is initial value, READ MORE ON MDN DOCs!

console.log(myTotal);

// reduce() is used to find the total billing amount of shopping cart cuz it's more fast & efficient method