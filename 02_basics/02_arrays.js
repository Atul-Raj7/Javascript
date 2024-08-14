const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["flash", "superman", "batman"]

// marvel_heros.push(dc_heros)  // dc_heros got pushed into marvel_heroes as an element

// console.log(marvel_heros); // Output -> [ 'thor', 'ironman', 'spiderman', [ 'flash', 'superman', 'batman' ] ]
// console.log(marvel_heros[3][1]);  // Output -> superman, [3] is for accessing marvel_heroes array's 3rd element which is dc_heroes and [1] is used to access dc_heroes 1st element.

// const all_heroes = marvel_heros.concat(dc_heros)
// console.log(all_heroes);

const all_new_heros = [...marvel_heros,...dc_heros]// ... -> it's called Spread operator which behaves same as concat()

// console.log(all_new_heros);


const another_array = [1,2,[3,4],5,[6,[7,8,9],10],11,12]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Atul"));
console.log(Array.from("Atul"));
console.log(Array.from({name : "Atul"})); //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));







