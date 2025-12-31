// todo Mapped types

// map

const arrOfNumber: number[] = [1, 2, 3, 4, 6]

const arrOfString: string[] = ['1', '2', '3', '4', '6'];

const arrayOfStringUsingMap: string[] = arrOfNumber.map((number) => number.toString())

console.log(arrayOfStringUsingMap)

// todo exploring Mapped in typescript
// todo practice project completed

type AreaOfNum = {
    height: number;
    width: number;
}

// type AreaOfString = {
//     height: string;
//     width: string;
// }

type height = AreaOfNum['height']

type Area<T> = {
    [i in keyof T]: T[i];
}

const area1: Area<{ height: string, width: number }> = {
    height: "50",
    width: 40,
}



// Practice session Start

type NewArea<T> = {
    [i in keyof T]: T[i]
}

const area3: NewArea<{ height: string; width: number }> = {
    height: "49",
    width: 32
}

console.log(area3)