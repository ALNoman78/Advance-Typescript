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

type Add = (num1: number, num2: number) => number

const add: Add = (num1, num2) => {
    const sum = num1 + num2
    return sum;
}

// interface start

interface IAdd {
    (num1: number, num2: number): number
}


const sum: IAdd = (num1, num2) => {
    const total = num1 + num2
    return total
}

// todo with interface

type Friends = string[]



// TODO indexing with interface

interface IFriends {
    [index: number]: string
}

const friends: IFriends = ['A', 'B', 'C']