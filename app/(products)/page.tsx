'use client';

import { useEffect, useState } from 'react';
import ProductItem from './_components/product-item';
import axios from 'axios';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/product');
                setProducts(data.data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="h-full">
            <main className="md:pl-5 md:pr-5 pt-[95px] h-full">{loading ? <p>Loading...</p> : products && <ProductItem products={products} />}</main>
        </div>
    );
}
