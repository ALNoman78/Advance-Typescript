const GenericDeveloper = <X,Y>(para1 :X, para2:Y) => {
    return [para1 , para2]
}

const arrObject = GenericDeveloper('Abdullah al noman' , 21)

console.log(arrObject)

const genericConstructive = <T> (course: T) =>{
    return [
    {
        course : 'Next Level Web Development',
        courseFee : 6500,
        ...course
    }
    ]
}

type user = {
    name : string;
    uid : number;
    phoneNumber?: number;
    hasCar?: boolean;
    isMarried? : boolean;
    hasJob? : boolean
}

const student1 : user = {
    name : 'Maisa Monoara Moule',
    uid : 212,
    hasCar : false
}

const student2 : user = {
    name : 'abdulla al noman',
    uid : 213,
    hasCar : true,
    hasJob : true,
    isMarried : false,
    phoneNumber : 01318969328,
}

console.log(student1)
console.log(student2)


const mainFunction = <T>(param1: T) => {
    return [param1]
}

console.log(mainFunction('abdulla al noman mondol'))

console.log(mainFunction({
    name: 'abudllah al noman ',
    number: '01318-9969328',
    id: 21
}))