// Generic Function

// const createArrayWithString = (value: string) => [value]


// const createArrayWithNumber = (value: number) => [value]


// const createArrayWithUserObject = (value: { id: number, name: string }) => {

//     return [value]
// }

// const arrNumber = createArrayWithNumber(12)
// // ! repeated function
// const arrString = createArrayWithUserObject({id : 12, name: 'Apple'})


// TODO Generic Function change the type dynamically

const createArrayWithGeneric = <T>(value : T) => {
    return [value]
}


const arrString = createArrayWithGeneric("Apple")

const arrObject = createArrayWithGeneric({
    id : 123,
    name : 'moule'
})


console.log('Array of string' , arrString , 'Array of Object', arrObject)


// tuple

const createArrayWithTuple = (param1 : string , param2 : string) => {
    return [param1 , param2]
}



// another function

const createArrWithTupleGeneric = <X, Y> (param1 : X, param2 : Y) => {
    return [param1, param2]
}

const res1 = createArrWithTupleGeneric('Person1', true)

const res2 = createArrWithTupleGeneric(23, {
    name: 'Person2',
    id: 21
})


console.log(res2)