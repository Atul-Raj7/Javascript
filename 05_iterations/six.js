/*


// forEach() with it's values stored in a variable
 
const coding = ["js", "cpp", "ruby", "java", "javascript"]

const values = coding.forEach( (item) => {
    console.log(item);  // this will print the result as usual but we'll do it with out printing it using console log. 
    return item;        // but the result will be `undefined`
})


*/

const myNum = ['1','2','3','4','5','6','7','8','9','10']

const result = myNum.filter( (num) => num > 4)           // 'filter' works same as 'forEach()' but it also returns the value. After putting callback function '(num)' we have to give a condition to it 'num > 4'
// console.log(result);

//      if using arrow function, then REMEMBER to write 'return' statement when creating a scope '{...}', or else when not using scope we can simply write thew conditon              //                        





const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter ( (bk) => bk.genre === 'History')
// console.log(userBooks);

let publishDate = books.filter( (date) => {return date.publish >= 2000 && date.genre == 'Science'})
console.log(publishDate);
