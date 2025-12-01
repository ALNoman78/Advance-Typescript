// todo Here is some information about type Alias

type User = {
    name: string;
    age: number
}

const user1: User = {
    name: "moule",
    age: 21
}

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role

const user2: UserWithRole = {
    name: "Mr x",
    age: 22,
    role: 'admin',
}

console.log(user2)

// todo Interface in Typescript

//! interface is start with second bracket, we can't use interface for primitive data type
// interface only work for Object type : array , object, function

interface IUser {
    name: string;
    age: number
}


const user3: IUser = {
    name: "Noman",
    age: 21
}

type IsAdmin = boolean

const isAdmin: IsAdmin = false

//  use interface

interface IUserWithRole extends IUser {
    role: "admin" | 'user'
}


// interface in Function

interface IFriends {

}


const friends = ['A', 'b', 'c']