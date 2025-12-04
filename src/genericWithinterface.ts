// Generic With Interface

type GenericArray<T> = Array<T>

type User = {
    name: string,
    age: number
}


const userList: GenericArray<User> = [
    {
        name: "Maisa Monoara Moule",
        age: 21
    }
]

console.log(userList)

// Generic with Interface

interface IUser {
    name: string,
    age: number
}

const secondUser: GenericArray<IUser> = [
    {
        name: 'Abdulla Al Noman',
        age: 21
    }
]

console.log(secondUser)


type TGenericArray<TM> = Array<TM>

interface IMainUser {
    name: string;
    id: number;
    student: boolean;
}

const mainUserList: TGenericArray<IMainUser> = [
    {
        name: 'Noman',
        id: 12,
        student: true
    }
]

console.log(mainUserList)


interface Developer<T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T
}

const poorDeveloper: Developer<{
    heartRate: string;
    stopWatch: boolean
}> = {
    name: 'Unknown Person',
    salary: 20,
    device: {
        brand: 'Apple',
        model: 'M3',
        releasedYear: '2024'
    },
    smartWatch: {
        heartRate: '70',
        stopWatch: true
    }
}


const richDeveloper: Developer<{
    heartRate: string;
    callSupport: boolean,
    calculator: boolean,
    aiFeature: boolean,
}> = {
    name: 'MR known',
    salary: 22,
    device: {
        brand: 'hp',
        model: 'AOSDFH2312312',
        releasedYear: '2021'
    },
    smartWatch: {
        heartRate: '65',
        callSupport: true,
        calculator: true,
        aiFeature: true,
    }
}