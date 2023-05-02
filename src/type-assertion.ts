let emni: any;


emni = "Next Level Web Development";

(emni as string).length;
<string>emni.length;


function KGtoGram(param: string | number): string | number {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The Converted Result ${value}`
    }else if (typeof param === 'number') {
        const value = param * 1000;
        return value
    }
}

const resultToBeNumber = KGtoGram(234) as number
const resultToBeString = KGtoGram("234") as string



type CustomErrorType = {
    message:string
}

try {
    
} catch (error) {
    console.log((error as CustomErrorType).message);
}