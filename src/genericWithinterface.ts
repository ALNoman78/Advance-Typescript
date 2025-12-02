// Generic With Interface

type GenericArray<T> = Array<T>

type User = {
    name : string,
    age : number
}


const userList : GenericArray<User> =[
    {
        name : "Maisa Monoara Moule",
        age : 21
    }
]