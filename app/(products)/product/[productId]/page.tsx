'use client';
import { useEffect, useState } from 'react';
import { ProductDetailComponent } from './_components/product-detail';
import { useContext } from 'react';
import { TodoContext } from '@/components/providers/currency-context';
import { useParams } from 'next/navigation';
import axios from 'axios';

export default function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(false);
    const { currency } = useContext(TodoContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`/api/product/${productId}`);
                setProduct(data.data);
            } catch (error) {
                setLoading(false);
                console.error('Error fetching product data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchData();
        }
    }, [productId]);

    return (
        <div className="h-full flex items-center justify-center">
            <main className=" md:px-5 pt-[95px] w-[400px] h-full">
                {loading ? <p>Loading...</p> : product && <ProductDetailComponent product={product} currency={currency} />}
            </main>
        </div>
    );
}
