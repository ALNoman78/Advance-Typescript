interface GenericDeveloper<X, T = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: X;
    bike?: T
}

interface bike {
    model: string;
    releaseData: string;
}

type SmartWatch = {
    waterProof: boolean
}

const Developer: GenericDeveloper<SmartWatch, bike> = {
    name: 'Maisa Monoara Moule',
    salary: 20.5,
    device:{
        model: 'intel core i5',
        brand: 'Inter',
        releasedYear : '2020'
    },
    smartWatch: {
        waterProof: true,
    }
}

console.log(Developer)