import { ProductCard } from './product-card';
import { Product, ProductProps } from '@/interface/product';
import SwitchCurrency from './switch-currency';

const ProductItem = ({ products }: ProductProps) => {
    return (
        <div className="space-y-10">
            <h1 className="text-2xl font-bold">Product</h1>
            <SwitchCurrency />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product: Product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};
export default ProductItem;
