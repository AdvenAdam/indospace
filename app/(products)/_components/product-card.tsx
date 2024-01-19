'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import Image from 'next/image';
import { Product, ProductProps } from '@/interface/product';
import Link from 'next/link';
import { useContext } from 'react';
import { TodoContext } from '@/components/providers/currency-context';

export function ProductCard({ name, image, id, sku, prices }: Product) {
    const { currency } = useContext(TodoContext);
    const price = currency === 'USD' ? prices[0].price : prices[1].price;
    return (
        <div className="w-full">
            <Card>
                <CardHeader />
                <CardContent>
                    <div className="">
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <div className="relative w-full aspect-video overflow-hidden">
                                        <Image src={image} alt={name} className="object-cover" fill />
                                    </div>
                                </div>
                                <div className="items-center space-y-1 text-center">
                                    <div className="text-xl line-clamp-2">{sku}</div>
                                    <div className="text-md line-clamp-2">{name}</div>
                                    <p className="text-xs text-muted-foreground">{price}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between ">
                    <Link href={`/product/${id}`} className="w-full" prefetch={true}>
                        <Button className="w-full">Detail</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
