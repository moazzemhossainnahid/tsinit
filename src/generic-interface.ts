interface GenericInterface <T, U = null>{
    name:string, 
    Husband:T,
    wife?:U

}

interface CrushInterface <T, U = null>{
    name:string, 
    husband:T,
    wife?:U
}

interface PersonInterface{
    name:string,
    age:number
}

const crush4:CrushInterface<{name:string, age:number}, {name:string, age:number}>={
    name:"kate",
    husband:{
        name:"NHD",
        age:23
    },
    wife:{
        name:"HRA",
        age:21
    }
}