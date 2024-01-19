import { getStaticProps, validJSON } from '@/lib/get-data';
import axios from 'axios';
import { NextResponse } from 'next/server';
export async function GET(req: Request, { params }: { params: { productId: string } }) {
    try {
        const { productId } = params;
        const response = await axios.get(`https://hobufa.com/getProductId.php?product_id=${productId}`);

        return NextResponse.json({ data: response.data });
    } catch (error) {
        console.log('🚀 ~ file: route.ts:7 ~ Product Detail', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
