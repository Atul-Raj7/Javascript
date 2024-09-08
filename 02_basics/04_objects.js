const YTuser = {}

YTuser.id = "abc123"
YTuser.name = "Atul Raj"
YTuser.isLoggedIn = false

// console.log(YTuser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Atul",
            lastName: "Raj"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userFullname.firstName);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({},obj1, obj2)

// Both methods used above is required to print multiple objects in a single object. //

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
    id: "1",
    email: "ramp@gmail.com"
    },
    {
    id: "2",
    email: "suresh@gmail.com"
    },
    {
    id: "3",
    email: "bhavesh@gmail.com"
    },
    {
    id: "4",
    email: "bhavesh@gmail.com"
    },
]

// console.log(user[0].email);

console.log(Object.keys(YTuser));
console.log(Object.values(YTuser));
console.log(Object.entries(YTuser));


console.log(YTuser.hasOwnProperty('isLoggedIn'));

console.log(YTuser.hasOwnProperty('isLogged'));