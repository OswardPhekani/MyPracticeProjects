// LEARNING ARROW FUNCTIONS

//Normal Function
function getGreetings (){
    return 'Greeting';
}
console.log(getGreetings());
// Arrow functions are anonymous :
// Meaning the dont have a name so store them in a variable 
// and call it with the parathesis (); at the end

// simple ARROW FUNCTION

// we can add parameters within the parathensis of an aroow function and call them in the function


// const greeting = (firstName) =>{
//     return 'hi' + firstName;
// }

// console.log(greeting(" tony"));


// if arrow function only has one statement we cna shorten further by leaving out the braces {};

const greeting = (firstName)=> "hi" + firstName;
console.log(greeting(' Tony'));
