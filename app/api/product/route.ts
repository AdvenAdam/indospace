import { getStaticProps, validJSON } from '@/lib/get-data';
import axios from 'axios';
import { NextResponse } from 'next/server';
export async function GET(req: Request) {
    try {
        const response = await axios.get(`https://hobufa.com/getProductList.php`);
        return NextResponse.json({ data: response.data });
    } catch (error) {
        console.log('🚀 ~ file: route.ts:7 ~ Product List:', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
