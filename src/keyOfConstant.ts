// todo What is key of Operator?

//  keyof : type operator

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
}

type MyVehicle1 = 'bike' | 'car' | 'cng'

type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "bike"

// console.log(myVehicle)

// TODO User object 

const user = {
    id: 12,
    name: 'Moule',
    address: {
        city: 'Barguna'
    },
}

// const myName = user.id

const myName = user['name']
const myId = user['id']
const myAddress = user['address']


// console.log({ myName, myAddress, myId })

const getResultFromObj = (obj: object, key: string) => {
    return obj[key]
}

const result = getResultFromObj(user, 'name')
console.log(result)
