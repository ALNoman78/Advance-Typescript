// todo What is key of operator
// keyof : type of operator

type RichPeople = {
    car: string;
    bike: string;
    cng: string;
}

type MyVehicle = 'car' | 'bike' | 'cng'

type MyVehicle2 = keyof RichPeople

const myVehicle: MyVehicle2 = "bike"

// todo Now what is key of constant 

const user: User = {
    id: 22,
    name: "Noman",
    address: {
        city: "Chittagong"
    }
}


// const myId = user.id

// const myId2 = user["id"]
// const myName = user["name"]
// const address = user["address"]

// console.log({ myName, myId2, address })

type User = {
    id: number,
    name: string,
    address: {
        city: string
    }
}

const getPropertyFromObject = <X>(obj: X, key: keyof X) => { // here i am user keyof User 
    return obj[key]
}

const result1 = getPropertyFromObject(user, "name")

const product = {
    brand: 'Hp'
}

const student = {
    id: 123,
    class: 'four'
}

const result2 = getPropertyFromObject(product, "brand")

const studentRes = getPropertyFromObject(student, "id")

console.log(result1, result2, studentRes)