'use client';
import React, { useRef, useState, ChangeEvent } from 'react';

import './drop-file-input.css';

import uploadImg from '@/public/assets/cloud-upload-regular-240.png';
import Image from 'next/image';
import { ImageConfig } from '@/config/ImageConfig';

interface ImageConfigType {
    default: string;
    pdf: string;
    png: string;
    css: string;
}

const DropFileInput = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const [fileList, setFileList] = useState([] as File[]);

    const onDragEnter = () => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.add('dragover');
        }
    };

    const onDragLeave = () => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.remove('dragover');
        }
    };

    const onDrop = () => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.remove('dragover');
        }
    };

    const onFileDrop = (e: ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.files?.[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
        }
    };

    const fileRemove = (file: File) => {
        const updatedList = [...fileList];
        const index = updatedList.indexOf(file);
        if (index !== -1) {
            updatedList.splice(index, 1);
            setFileList(updatedList);
        }
    };

    const onSubmit = async () => {
        try {
            if (fileList.length === 0) {
                console.log('No files to upload.');
                return;
            }

            const data = new FormData();
            fileList.forEach((file, index) => {
                data.append(`file${index + 1}`, file);
            });

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data
            });
            if (!res.ok) throw new Error(await res.text());
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form ref={formRef} encType="multipart/form-data" onSubmit={onSubmit}>
            <div ref={wrapperRef} className="drop-file-input" onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
                <div className="drop-file-input__label">
                    <Image src={uploadImg} alt="" height={100} width={100} />
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop} />
            </div>
            {fileList.length > 0 ? (
                <div className="drop-file-preview">
                    <p className="drop-file-preview__title">Ready to upload</p>
                    {fileList.map((item, index) => (
                        <div key={index} className="drop-file-preview__item">
                            <Image
                                src={ImageConfig[item.type.split('/')[1] as keyof ImageConfigType] || ImageConfig['default']}
                                alt=""
                                height={50}
                                width={50}
                            />
                            <div className="drop-file-preview__item__info">
                                <p>{item.name}</p>
                                <p>{item.size}B</p>
                            </div>
                            <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>
                                x
                            </span>
                        </div>
                    ))}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '10px'
                        }}>
                        <button className="danger-button" onClick={() => setFileList([])}>
                            Remove all
                        </button>
                        <button className="success-button" type="submit">
                            {fileList.length > 1 ? 'Upload all' : 'Upload'}
                        </button>
                    </div>
                </div>
            ) : null}
        </form>
    );
};

export default DropFileInput;
