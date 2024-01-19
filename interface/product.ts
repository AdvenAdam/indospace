export interface Price {
    currency: string;
    price: string;
}

export interface Product {
    id: number;
    sku: string;
    name: string;
    image: string;
    prices: Price[];
}

export interface ProductProps {
    products: Product[];
}
