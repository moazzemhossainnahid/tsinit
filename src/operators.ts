//spread operators

const myFriends = ['korim', 'rohim', 'sakib']
const myNewFriends = ['monika', 'konika', 'sathi']

const myBestFriend = {
    fullname: "ashik sarker",
    age: 45
}

// myFriends.push(myNewFriends); *not this type*
myFriends.push(...myNewFriends);

console.log(myFriends);



// rest operators

// const greetFriends=(friend1:string, friend2:string, friend3:string):void=>{
// console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}`);
// }


// greetFriends("Kashem", "Hashem", "Korim")


const greetFriends = (...friends: string[]): void => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
}

greetFriends("Kashem", "Hashem", "Korim", "kuddus", "jobbar", "habib")


// array and object distructuring

const [bestFriend] = myFriends
const {fullname:fdname} = myBestFriend

console.log(fdname);