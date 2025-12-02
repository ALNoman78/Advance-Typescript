// Generic With Interface

type GenericArray<T> = Array<T>

type User = {
    name: string,
    age: number
}


const userList: GenericArray<User> = [
    {
        name: "Maisa Monoara Moule",
        age: 21
    }
]

console.log(userList)

// Generic with Interface

interface IUser {
    name: string,
    age: number
}

const secondUser: GenericArray<IUser> = [
    {
        name: 'Abdulla Al Noman',
        age : 21
    }
]

console.log(secondUser)