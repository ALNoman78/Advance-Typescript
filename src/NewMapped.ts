// mapped in typescript

// map

const arrayOfNumber: number[] = [1, 3, 5]

const arrayOfString: string[] = ['1', '3', '5']

const arrayOfStringUsingMapped: string[] = arrayOfNumber.map((number) => number.toString())

console.log(arrayOfStringUsingMapped)


const user = {
    id: 222
}
user['id']


type AreaOfNum = {
    height: number;
    width: number;
}

type height = AreaOfNum['height']

// type AreaOfString = {
//     height: string;
//     width: string;
// }


//  todo basic rule of typescript mapped 

// type AreaOfBoolean = {
//     [key in "height" |" width"] : boolean
// }

// ! use there with generic 

type Area<T> = {
    [key in keyof T]: T[key];
}

const area1: Area<{ height: string; width: number }> = {
    height: "50",
    width: 40,
}

console.log(area1)















// practice part here


//  data mapped completed 

type newArea<T> = {
    [key in keyof T]: T[key];
}

const geometricArea : newArea< { width : string; height : number;}> = {
    width : "40",
    height : 30,
}
