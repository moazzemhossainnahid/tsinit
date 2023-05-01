// const crush1:{
//     name:string,
//     age:number,
//     profession:string,
//     address:string
// }={
//     name:"Moyna pakhi",
//     age:22,
//     profession:"Web developer",
//     address:"Uganda"
// }

// const crush2:{
//     name:string,
//     age?:number, //optional type
//     profession:string,
//     address:string
// }={
//     name:"Tiya pakhi",
//     profession:"Next Level Web Developer",
//     address:"Maxico"
// }


type CrushType = {
    name: string,
    age: number,
    profession: string,
    address: string
}


const crush3: CrushType = {
    name: "Tiya pakhi",
    age: 19,
    profession: "Next Level Web Developer",
    address: "Maxico"
}


type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;


// const calculate = (num1: number, num2: number, operation:(x:number, y:number) => number) => {
//     return operation(num1, num2)
// }

// calculate(3, 5,(x,y) => x+y);
// calculate(3, 5,(x,y) => x-y);



type OperationType = (x: number, y: number) => number;


const calculate = (
    num1: number,
    num2: number,
    operation: OperationType
) => {
    return operation(num1, num2)
}


const into = calculate(3, 5,(x,y) => x*y);
const devide = calculate(3, 5,(x,y) => x/y);


console.log(into);
console.log(devide);