// todo Dynamically generalize [ remind me my concept ] :Generic

type Friends = string[]
type RollNumber = number[]

type GenericArray<T> = Array<T>

// const friends: Friends = ['Mr X', 'Noman', "Person1"]

// ? Another way to define the type of Array

const friends: GenericArray<string> = ['Mr X', 'Noman', "Person1"]

// const rollNumber: RollNumber = [2, 4, 5, 76, 7]
// also another way to declare Number type array

const rollNumber: GenericArray<number> = [2, 4, 5, 76, 7]

// const isEligibleList : boolean[] = [true, false, true]

const isEligibleList: GenericArray<boolean> = [true, false, true]


const sqeFunc = (value: number): number => {
    return value * value
}

console.log(sqeFunc(10))


type Coordinates<X, Y> = [X, Y]

const coordinates1: Coordinates<number, number> = [10, 20];
const coordinates2: Coordinates<string, string> = ['10', '20'];


// TODO how to use Generic for Array of Objects


const userList : GenericArray<{name: string, age: number}> = [
    {
        name: 'Maisa Monoara Moule',
        age: 22,
    },
    {
        name : 'Abdulla Al Noman',
        age : 21
    },
]