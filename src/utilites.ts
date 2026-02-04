// utility type

type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
}

// type ProductSummary = {
//     id : number ;
//     name : string;
//     price : string;
// }

type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>

type ProductWithOutStock = Omit<Product, 'color' | 'stock'>

type ProductWithColor = Required<Product>

const product1: ProductWithColor = {
    id: 32,
    name: "Mouse",
    price: '$33.44',
    stock: 300,
    color: "red"
}

type ProductOptional = Partial <Product>

type ProductReadOnly = Readonly<Product>

const product3 = {
    id: 32,
    name: "Mouse",
    price: '$33.44',
}

// todo If sometime I need to declare an empty object then I have to use Record

const emptyObj : Record<string, unknown> = {}