// todo What is key of Operator?

//  keyof : type operator

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
}

type MyVehicle1 = 'bike' | 'car' | 'cng'

type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle : MyVehicle2 = "bike"

console.log(myVehicle)