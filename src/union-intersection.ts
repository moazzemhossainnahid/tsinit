type NoobDeveloper = {
    name: string
}


// type JuniorDeveloper = {
//     name: string,
//     expertise: String,
//     experience: number
// }

// union
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Mojnu Mia",
    expertise: "JavaScript",
    experience: 3
}


// intersection
type JuniorDeveloper = NoobDeveloper & {
    name: string,
    expertise: String,
    experience: number
}