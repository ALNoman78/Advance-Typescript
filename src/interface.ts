// todo Here is some information about type Alias

type User = {
    name: string;
    age : number
}

const user1: User ={
    name : "moule",
    age : 21
} 

type Role = {
    role : 'admin' | 'user'
}

type UserWithRole = User & Role

const user2 : UserWithRole = {
    name : "Mr x",
    age : 22,
    role : 'admin',
}

// todo 