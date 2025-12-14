type User = {
    name : string;
    id : number ;
    address : {
        city : string
    }
}

const user: User = {
    name : "Noman",
    id : 16306,
    address : {
        city : 'Dhaka'
    }
} 

const getProperty = <X>(obj : X , key : keyof X) => {
    return obj[key]
} 

const result = getProperty(user, "name")

console.log(result)