// for in 

// loops through the properties of an object 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    console.log(key,':-',myObject[key]);
    
}