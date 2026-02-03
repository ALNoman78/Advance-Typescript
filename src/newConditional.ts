//  what is conditional type = those code based on type and condition as well 

type A = null;
type B = undefined;

type C = A extends number ? true : B extends number ? true : false;

type RichPeopleVehicle = {
    bike: string;
    car: string;
    ship: string;
}

// todo main condition is here

type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? true : false

// only explore this thing is there value available or not

type HasBike = CheckVehicle<"ship">




type poorPeople = {
    bike: string;
    ship: string;
    watch: string;
    money: number;
}

type checkIsHePoor<X> = X extends keyof poorPeople ? true : false 

type realPoorPeople = checkIsHePoor<"money">