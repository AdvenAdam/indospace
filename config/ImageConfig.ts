import type { StaticImageData } from 'next/image';
import fileDefault from '@/public/assets/file-blank-solid-240.png';
import fileCSS from '@/public/assets/file-css-solid-240.png';
import filePdf from '@/public/assets/file-pdf-solid-240.png';
import filePng from '@/public/assets/file-png-solid-240.png';

interface ImageConfigType {
    default: StaticImageData;
    pdf: StaticImageData;
    png: StaticImageData;
    css: StaticImageData;
}

const ImageConfig: ImageConfigType = {
    default: fileDefault,
    pdf: filePdf,
    png: filePng,
    css: fileCSS
};

export { ImageConfig };
