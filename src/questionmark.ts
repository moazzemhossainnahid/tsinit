// ternery operator
const age: number = 15;

// if(age > 18){
//     console.log("yes he is Adult");
// }else{
//     console.log("He is child");
// }

const isAdult = age >= 18 ? "yes" : "No";


// Nullish Coalesnace Operator
// Null & Undefined

const isAuthenticatedUser = ''

const userName = isAuthenticatedUser ?? "Guest";
console.log(userName);