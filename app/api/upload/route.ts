import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const files: File[] = [];

        for (const [name, entry] of data.entries()) {
            if (entry instanceof File) {
                files.push(entry);
            }
        }

        if (files.length === 0) {
            return NextResponse.json({ success: false, message: 'No files uploaded.' });
        }
        // Handle each file
        for (const file of files) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const path = `public/fileUpload/${file.name}`;
            await writeFile(path, buffer);
        }
        return NextResponse.json({ success: true, message: 'Files uploaded successfully.' });
    } catch (error) {
        console.log('🚀 ~ POST ~ error:', error);
        return NextResponse.json({ success: false, message: 'Error uploading files.' });
    }
}
