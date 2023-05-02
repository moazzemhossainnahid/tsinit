
// nullable type
const searchName = (value: string | null) => {
    if (value === null) {
        console.log('There is Nothing to Search');
    } else {
        console.log("Searching...");
    }
}


searchName(null);



// unknown type
const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertSpeed = (speed * 1000) / 3600
        console.log(`My Speed is ${convertSpeed}`);
    } else if (typeof speed === 'string') {
        // const value = speed.split(' ');
        const [value, unit] = speed.split(' ');
        const convertSpeed = (parseFloat(value) * 1000) / 3600
        console.log(`My Speed is ${convertSpeed.toFixed(2)}`);
    } else {
        console.log("There is Wrong Type !");
    }
}

getMyCarSpeed(10)
getMyCarSpeed(`10 kmh`)
getMyCarSpeed(false)


// never type

function throwErr(message: string): never {
    throw new Error(message)
}

throwErr("Error is mortal")
