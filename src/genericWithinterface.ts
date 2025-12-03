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
        age: 21
    }
]

console.log(secondUser)


type TGenericArray<TM> = Array<TM>

interface IMainUser {
    name: string;
    id: number;
    student: boolean;
}

const mainUserList: TGenericArray<IMainUser> = [
    {
        name: 'Noman',
        id: 12,
        student: true
    }
]

console.log(mainUserList)