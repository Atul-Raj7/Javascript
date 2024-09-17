const user = {
    username: "Atul", 
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website.`);
        console.log(this);
        
    }
}

// user.welcomeMessage()   
// user.username = "Sam"
// user.welcomeMessage()
console.log(this);

// function test() {
//     console.log(this.username);
    
// }

// test()

const test = () => {
    let username = "Atul"
    console.log(this.username);
    
}

// test()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Atul"})

console.log(addTwo(3,4));
