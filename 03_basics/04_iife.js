//  Immediately Invoked Function Expression 

// function test() {
//     console.log(`DB Connected`);
    
// }

// test()

(function test() {
    console.log(`DB Connected`);
    
})();

// ()();  //  First parenthesis are used to wrap whole function and second parenthesis is used to execute that function && ALWAYS REMEMBER TO CLOSE IT WITH SEMICOLON ; OR ELSE IT'LL RUN INDEFINETLY  //

// We use IIFE because to counter global scope variable pollution

(function aucode() {
    // This is named IIFE
    console.log(`DB Connected Two`);
    
})();

((name) =>{
    // This is simple IIFE
    console.log(`DB Connected Three ${name}`);   
})("Atul");