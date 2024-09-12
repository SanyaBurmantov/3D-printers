'use client'
import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import axios from 'axios';

// interface File {
//     name: string;
//     size: number;
//     type: string;
//     file: Blob;
// }

interface AttachmentsFileInputProps {
    downloadFilesCallback: (filesDownload: boolean) => void;
    files: File[];
    setFiles: React.Dispatch<React.SetStateAction<File[]>>
}

export const AttachmentsFileInput = (props: AttachmentsFileInputProps) => {

    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = Array.from(e.target.files || [])
        props.setFiles((prevFiles) => [...prevFiles, ...newFiles]);

        const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));
        setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
    };

    const sendFiles = async (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (props.files.length) {
            props.downloadFilesCallback(true);
        } else {
            props.downloadFilesCallback(false);
        }
        if (!props.files || props.files.length === 0) return
        try {
            const data = new FormData()
            for (const file of props.files) {
                data.append(file.name, file)
            }

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data
            })
            if (!res.ok) throw new Error(await res.text())
        } catch (e: any) {
            console.error(e)
        }
    }


    const handleRemoveFile = (index: number) => {
        const newFiles = [...props.files];
        newFiles.splice(index, 1);
        props.setFiles(newFiles);

        const newPreviewUrls = [...previewUrls];
        newPreviewUrls.splice(index, 1);
        setPreviewUrls(newPreviewUrls);
    };

    const handleCancel = () => {
        props.setFiles([]);
        setPreviewUrls([]);
    };

    useEffect(() => {
        if(props.files.length>0){
            props.downloadFilesCallback( true)
        } else  props.downloadFilesCallback( false)
    }, [props.files]);

    return (
        <form onSubmit={sendFiles}>
            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                Загрузите файлы
            </label>
            <div className='relative'>
                <label
                    htmlFor='file'
                    className='flex min-h-[175px] w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-primary p-6'
                >
                    <div>
                        <input
                            type='file'
                            name='file'
                            id='file'
                            className='sr-only'
                            multiple
                            onChange={handleFileChange}
                        />
                        <span className='mx-auto mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2'>
              <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
              >
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M2.5013 11.666C2.96154 11.666 3.33464 12.0391 3.33464 12.4993V15.8327C3.33464 16.0537 3.42243 16.2657 3.57871 16.4219C3.73499 16.5782 3.94695 16.666 4.16797 16.666H15.8346C16.0556 16.666 16.2676 16.5782 16.4239 16.4219C16.5802 16.2657 16.668 16.0537 16.668 15.8327V12.4993C16.668 12.0391 17.0411 11.666 17.5013 11.666C17.9615 11.666 18.3346 12.0391 18.3346 12.4993V15.8327C18.3346 16.4957 18.0712 17.1316 17.6024 17.6004C17.1336 18.0693 16.4977 18.3327 15.8346 18.3327H4.16797C3.50493 18.3327 2.86904 18.0693 2.4002 17.6004C1.93136 17.1316 1.66797 16.4957 1.66797 15.8327V12.4993C1.66797 12.0391 2.04106 11.666 2.5013 11.666Z'
                    fill='#3056D3'
                ></path>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9.41074 1.91009C9.73618 1.58466 10.2638 1.58466 10.5893 1.91009L14.7559 6.07676C15.0814 6.4022 15.0814 6.92984 14.7559 7.25527C14.4305 7.58071 13.9028 7.58071 13.5774 7.25527L10 3.67786L6.42259 7.25527C6.09715 7.58071 5.56951 7.58071 5.24408 7.25527C4.91864 6.92984 4.91864 6.4022 5.24408 6.07676L9.41074 1.91009Z'
                    fill='#3056D3'
                ></path>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M10.0013 1.66602C10.4615 1.66602 10.8346 2.03911 10.8346 2.49935V12.4994C10.8346 12.9596 10.4615 13.3327 10.0013 13.3327C9.54106 13.3327 9.16797 12.9596 9.16797 12.4994V2.49935C9.16797 2.03911 9.54106 1.66602 10.0013 1.66602Z'
                    fill='#3056D3'
                ></path>
              </svg>
            </span>
                        <span className='text-base text-body-color dark:text-dark-6'>
              Перетащите файлы сюда
              <span className='text-primary underline'> или нажмите для выбора файлов</span>
            </span>
                    </div>
                </label>
            </div>
            {error && <div className='text-red-500 mt-2'>{error}</div>}
            {props.files.length > 0 && (
                <div className='mt-4'>
                    <h3 className='text-lg font-medium mb-2'>Загружаемые файлы:</h3>
                    <div className='grid grid-cols-4 gap-4'>
                        {props.files.map((file, index) => (
                            <div key={index} className='relative'>
                                <img
                                    src={previewUrls[index]}
                                    alt={`Предпросмотр файла ${index}`}
                                    className='max-w-full'
                                />
                                <div className='mt-2'>
                                    <p className='text-sm font-medium'>{file.name}</p>
                                    <p className='text-sm text-gray-500'>{file.size} bytes</p>
                                </div>
                                <button
                                    className='absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-200'
                                    onClick={() => handleRemoveFile(index)}
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-4 w-4 text-gray-600'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </form>
    );
};
