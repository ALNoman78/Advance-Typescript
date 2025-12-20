// what is conditional type : those type based on condition

type A = null;
type B = undefined;

type C = A extends null ? true : B extends undefined ? true : false


type RichPeopleVehicle = {
    bike: string;
    car: string;
    ship: string
}

type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false

type HasBike = CheckVehicle<"ship">