// const promise1 = new Promise(function(resolve, reject){
//     // Do async task
//     // DB calls, cryptography, network call
//     setTimeout(function(){
//         console.log('Async task has been completed');
//         resolve()
//     },1000)
// })

// promise1.then(function(){
//     console.log('Promise consumed');
// })


// new Promise(function(resolve, reject){
//     console.log("Async task 2 is completed")
//     resolve()
// }).then(function(){
//     console.log("async task 2 is resolved")
// })


// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: 'Atul', email: '1234@example.com'})
//     },1000)
// })

// promise3.then(function(user){
//     console.log(user)
// })



// const promise4 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: 'Atul', email: '1234@example.com'})
//         }
//         else{
//             reject('ERROR: Something went wrong!')
//         }
//     }, 1000)
// })

// promise4.then(function(user){
//     console.log(user)
//     return user.username
// }).then((username) => {console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => {console.log('The promise is either resolved or rejected');
// })




// const promise5 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({language: 'JS', version: 'ES6'})
//         }
//         else{
//             reject('ERROR: JS went wrong!')
//         }
//     }, 1000)
// })

// async function consumePromise5(){
//     try {
//         const response = await promise5
//     console.log(response)
//     } catch (error) {
//         console.log(error)
//     } 
// }

// consumePromise5() 

async function getAllUsers() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data)
    } catch (error) {
        console.log("E: ", error)
    }
}

getAllUsers()