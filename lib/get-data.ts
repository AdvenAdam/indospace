import { data } from '@/lib/fixedData';

// karena data JSON dari server masih belum sesuai format,
// sementara saya ubah sendiri menggunkan data static dari data server yang sudah sesuai format (data menjadi statis)

export const validJSON = (str: string) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

export async function getStaticProps(id?: String) {
    try {
        if (id) {
            return data.find((item: any) => item.id == id);
        }
        return data;
    } catch (error) {
        console.log('🚀 ~ getStaticProps ~ error:', error);
        return null;
    }
}
