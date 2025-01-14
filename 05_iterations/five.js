// forEach 

// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.


const coding = ['js', 'python', 'c++', 'java', 'c']

// coding.forEach ( function (val) {
//     console.log(val);
    
// })

coding.forEach (  (val) => {
    // console.log(val);
    
} )




const myCoding = [ 
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'c++',
        languageFileName: 'cpp'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
    {
        languageName: 'ruby',
        languageFileName: 'rb'
    },
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})