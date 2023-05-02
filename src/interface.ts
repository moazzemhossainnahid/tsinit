type User = {
    name: string,
    age: number
}


interface IUser {
    name: string,
    age: number
}

interface IExtendedUser extends IUser{
    role:string
}

const userWithTypeAlis: User = {
    name: "Type Alis",
    age: 1000
}

const userWithInterface: IUser = {
    name: "interface",
    age: 200
}