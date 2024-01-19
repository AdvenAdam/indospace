import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Product } from '@/interface/product';

import Image from 'next/image';

export function ProductDetailComponent({ product, currency }: { product: Product; currency: String }) {
    const price = currency === 'USD' ? product.prices[0].price : product.prices[1].price;
    return (
        <Card>
            <CardHeader />
            <CardContent>
                <div className="">
                    <div className="grid items-center gap-4 w-full">
                        <div className="flex flex-col space-y-1.5">
                            <div className="relative aspect-video overflow-hidden">
                                <Image src={product.image} alt={product.name} className="object-cover" fill />
                            </div>
                        </div>
                        <div className="items-center space-y-1 text-center">
                            <div className="text-xl line-clamp-2">{product.sku}</div>
                            <div className="text-md line-clamp-2">{product.name}</div>
                            <p className="text-xs text-muted-foreground">{price}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between "></CardFooter>
        </Card>
    );
}
