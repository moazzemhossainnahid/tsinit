// const rollNumber: Array<number> = [33, 44, 56, 28, 75];
// const rollNumber2: Array<string> = ["11", "35", "90", "76", "64"];
// const rollNumber3: Array<boolean> = [true, false]
// const userNamendRoll: Array<{ name: string, roll: number }> = [{ name: "X", roll: 7 }, { name: "Y", roll: 9 }];


type GenericArray<T> = Array<T>


const rollNumber: GenericArray<number> = [33, 44, 56, 28, 75];
const rollNumber2: GenericArray<string> = ["11", "35", "90", "76", "64"];
const rollNumber3: GenericArray<boolean> = [true, false]
const userNamendRoll: GenericArray<{ name: string, roll: number }> = [{ name: "X", roll: 7 }, { name: "Y", roll: 9 }];


type GenericTuple<x, y> = [x, y]

const relation: GenericTuple<string, string> = ["NHD", "HRA"];


// const relationWithSalary: GenericTuple<object, string> = [
//     {
//         name: "NHD",
//         salary: 100000
//     },
//     "HRA"
// ]
const relationWithSalary: GenericTuple<{name:string, salary:number}, string> = [
    {
        name: "NHD",
        salary: 100000
    },
    "HRA"
]