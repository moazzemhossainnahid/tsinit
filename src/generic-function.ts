const createArray = <T>(param: T): T[] => {
    return [param]
}


const result = createArray("Bangladesh");



// spread operator
const crush = 'Kate Winslate';

const myInfo = {
    name: "Nahid",
    age: 100,
    salary: 200000
}
// const newData = {...myInfo, crush};



const addMeInMyCrushMind = (myInfo: object) => {
    const crush = 'Kate Winslate';
    const newData = { ...myInfo, crush };
    return newData;
}


const addMeInMyCrushMind2 = <T>(myInfo: T) => {
    const crush = 'Kate Winslate';
    const newData = { ...myInfo, crush };
    return newData;
}


const result5 = addMeInMyCrushMind2(myInfo);
result5.age