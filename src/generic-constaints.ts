const createArray2 = <T>(param: T): T[] => {
    return [param]
}


const result2= createArray("Bangladesh");



// spread operator
const crush2 = 'Kate Winslate';

const myInfo2 = {
    name: "Nahid",
    age: 100,
    salary: 200000
}
// const newData = {...myInfo, crush};


type myInfoType={
    name:string,
    age:number,
    salary:number
}


const myInfo3:myInfoType = {
    name: "Nahid",
    age: 100,
    salary: 200000
}


const addMeInMyCrushMind3 = (myInfo: object) => {
    const crush = 'Kate Winslate';
    const newData = { ...myInfo, crush };
    return newData;
}


const addMeInMyCrushMind4 = <T extends myInfoType>(myInfo: T) => {
    const crush = 'Kate Winslate';
    const newData = { ...myInfo, crush };
    return newData;
}


const result6 = addMeInMyCrushMind4(myInfo2);
result6.age