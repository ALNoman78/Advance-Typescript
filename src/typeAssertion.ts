
let anything: any;

anything === 'moule';

(anything as string) // it's called type assertion

// todo Example type Assertion

const kgToGmConverter = (input: string | number): string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === 'string') {
        const [value] = input.split(" ")
        return `Converted Output is ${Number(value) * 1000}`
    }
}

const result = kgToGmConverter(2) as number; // I define here it should be number
// ! result [ better define ] when i'm sure about that it should be number 
console.log({ result })

const result2 = kgToGmConverter('2 kg') as string; // it should be string it's called type Assertion
// ! result [ better define ] when i'm sure about that it's string then i have to define that
console.log({ result2 })
