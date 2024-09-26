'use client'
import React, {useCallback, useEffect, useState} from 'react';
import {Checkbox} from "@nextui-org/checkbox";
import nodemailer from 'nodemailer';
import {Input, Textarea} from "@nextui-org/input";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import {AnimatePresence, motion} from 'framer-motion';
import {AttachmentsFileInput} from "@/components/Inputs/AttachmentFileInput";
import { useForm, ValidationError } from '@formspree/react';
import axios from "axios";
import {log} from "node:util";

const Page = () => {
    const [state, handleSubmit] = useForm("myzgvavl");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    const [needScan, setNeedScan] = React.useState(false);
    const [needModel, setNeedModel] = React.useState(false);
    const [needPrint, setNeedPrint] = React.useState(false);
    const [needHelp, setNeedHelp] = React.useState(false);
    const [filesDownload, setFilesDownload] = React.useState(false);
    const [selectedTechnology, setSelectedTechnology] = React.useState(new Set(['']));
    const [selectedMaterial, setSelectedMaterial] = React.useState(new Set(['']));
    const [selectedSomething, setSelectedSomething] = React.useState(false)
    const [gabarith, setGabarith] = React.useState('');
    const [gabaritl, setGabaritl] = React.useState('');
    const [gabaritw, setGabaritw] = React.useState('');
    const [pressure, setPressure] = React.useState('');
    const [uses, setUses] = React.useState('');
    const [count, setCount] = React.useState('');
    const [comment, setComment] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [fio, setFio] = React.useState('');
    const [org, setOrg] = React.useState('');

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const handleNeedScan = (isSelected: boolean) => {
        setNeedScan(isSelected)
    }
    const handleNeedModel = (isSelected: boolean) => {
        setNeedModel(isSelected)
    }
    const handleNeedPrint = (isSelected: boolean) => {
        setNeedPrint(isSelected)
    }

    const handleFilesDownload = (filesDownload: boolean) => {
        setFilesDownload(filesDownload)
    }

    const handleSelectTechnology = (keys: any) => {
        setSelectedTechnology(keys)
    }
    const handleSelectMaterial = (keys: any) => {
        setSelectedMaterial(keys)
    }
    const handleSelectGabarith = (value: any) => {
        if(isNaN(Number(value))){
            return
        } else setGabarith(value);
    };
    const handleSelectGabaritl = (value: any) => {
        if(isNaN(Number(value))){
            return
        } else setGabaritl(value);
    };
    const handleSelectGabaritw = (value: any) => {
        if(isNaN(Number(value))){
            return
        } else setGabaritw(value);
    };

    const handleSelectPreasure = (value: any) => {
        setPressure(value);
    };

    const handleSelectUses = (value: any) => {
        setUses(value);
    };

    const handleSelectCount = (value: any) => {
        setCount(value);
    };

    const handleSelectComment = (value: any) => {
        setComment(value);
    };

    const handleSelectNumber = (value: any) => {
        setNumber(value);
    };

    const validateNumber = (value: string) => {
        const phonePattern = /^(?:\+375\d{9}|80\d{9})$/;
        return phonePattern.test(value);
    };

    const isInvalidNumber = React.useMemo(() => {
        if (number === "") return false;
        return validateNumber(number) ? false : true;
    }, [number]);


    const handleSelectMail = (value: any) => {
        setMail(value);
    };

    const handleSelectFio = (value: any) => {
        setFio(value);
    };

    const validateFio = (value: string) => {
        return value.length > 1
    };

    const isInvalidFio = React.useMemo(() => {
        if (fio === "") return false;

        return validateFio(fio) ? false : true;
    }, [fio]);

    const handleSelectOrg = (value: any) => {
        setOrg(value);

    };

    const [files, setFiles] = useState<File[]>([]);

    const [isFdm, setIsFdm] = useState(false);
    const [isSla, setIsSla] = useState(false);
    const [isSlm, setIsSlm] = useState(false);
    const [isSls, setIsSls] = useState(false);

    useEffect(() => {
        // Reset all states
        setIsFdm(false);
        setIsSla(false);
        setIsSlm(false);
        setIsSls(false);
        setNeedHelp(false)
        setSelectedMaterial(new Set(['']));
        if (selectedTechnology.has("FDM/FFF")) {
            setIsFdm(true);
        } else if (selectedTechnology.has("SLA")) {
            setIsSla(true);
        } else if (selectedTechnology.has("SLM")) {
            setIsSlm(true);
        } else if (selectedTechnology.has("SLS")) {
            setIsSls(true);
        }
    }, [selectedTechnology]);

    const handleCreateOrder = async (e: any) => {

        e.preventDefault()
        const token = "6534530183:AAE0eiwpeM-VsL2ZUjwjXRKU49KfExqlmdc";
        const users = ["408745156"];
        const message =
            `   
                Заявка %0A
                Клиент: ${fio} %0A
                номер телефона: ${number} %0A
                почта: ${mail} %0A
                организация: ${org} %0A
                Описание %0A
                нужно сканирование: ${needScan ? 'Да' : 'Нет'} %0A
                нужно моделирование: ${needModel ? 'Да' : 'Нет'} %0A
                нужна печать: ${needPrint ? 'Да' : 'Нет'} %0A
                габариты: ${gabarith} ${gabaritw} ${gabaritl} %0A
                технология: ${selectedTechnology.values().next().value} %0A
                материал: ${selectedMaterial.values().next().value} %0A
                количество: ${count} %0A
                нагрузки: ${pressure} %0A
                использование: ${uses} %0A
                комментарий: ${comment} %0A
            `
        ;
        const requests = [];

        try {
            for (let user of users) {
                const sendMessageUrl = `https://api.telegram.org/bot${token}/sendMessage`;
                const sendDocumentUrl = `https://api.telegram.org/bot${token}/sendDocument`;

                const sendMessageConfig = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                };

                const sendDocumentConfig = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };

                const sendMessageData = `chat_id=${user}&text=${encodeURIComponent(message)}&parse_mode=html`;

                const formData = new FormData();
                files.forEach((file, index) => {
                    formData.append(`document`, file, file.name);
                    const sendDocumentData = formData;
                    sendDocumentData.append('chat_id', user);
                    const sendDocumentPromise = axios.post(sendDocumentUrl, sendDocumentData, sendDocumentConfig);
                    requests.push(sendDocumentPromise);
                });

                const sendMessagePromise = axios.post(sendMessageUrl, sendMessageData, sendMessageConfig);
                requests.push(sendMessagePromise);
            }
            await Promise.all(requests);
        } catch (error) {
            console.error("Ошибка отправки сообщений:", error);
        } finally {
            // ...
        }

    }

    const selectedTechValue = React.useMemo(
        () => Array.from(selectedTechnology).join(", ").replaceAll("_", " "),
        [selectedTechnology]
    );
    const selectedMaterialValue = React.useMemo(
        () => Array.from(selectedMaterial).join(", ").replaceAll("_", " "),
        [selectedMaterial]
    );

    const disableForm = () => {
        if (!isInvalidFio && !fio && !number)
            return true
        return isInvalidFio && !fio && !number
    }

    useEffect(() => {
        if (needPrint) {
            setSelectedSomething(true)
        } else if (needScan) {
            setSelectedSomething(true)
        } else if (needModel) {
            setSelectedSomething(true)
        } else setSelectedSomething(false)
    }, [needPrint, needScan, needModel]);

    useEffect(() => {
        if (selectedMaterial.has("Мне нужна помощь")) {
            setNeedHelp(true)
        } else if (selectedTechnology.has("Мне нужна помощь")){
            setNeedHelp(true)
        } else {
            setNeedHelp(false)
        }
    }, [selectedMaterial, selectedTechnology])

    return (
        <>
            <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
                <div className="container">
                    <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                        Заявка на расчет стоимости
                    </h2>
                    <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                        Добро пожаловать на страницу заказа! Здесь вы можете заказать уникальные 3D модели,
                        которые будут напечатаны с использованием современных технологий. Мы предлагаем
                        широкий выбор материалов и цветов для вашей 3D печати. Пожалуйста, заполните форму
                        ниже, чтобы разместить свой заказ.
                    </p>
                    <p className="mb-3 text-base leading-relaxed dark:text-dark-6">
                        Мне нужно:
                    </p>
                    <div className="flex flex-col gap-1 mb-9">
                        <Checkbox onValueChange={handleNeedScan}>3D сканирование</Checkbox>
                        <Checkbox onValueChange={handleNeedModel}>3D моделирование</Checkbox>
                        <Checkbox onValueChange={handleNeedPrint}>3D печать</Checkbox>
                    </div>
                    {selectedSomething && (
                        <>
                            <AttachmentsFileInput files={files} setFiles={setFiles} downloadFilesCallback={handleFilesDownload}/>
                        </>
                    )}
                    <div className="flex flex-col gap-4 mt-6">

                        <table className="w-full border-collapse">
                            {filesDownload && needScan && (
                                <motion.tr
                                    initial={{opacity: 0, y: -20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5}}
                                    className="border-b border-gray-300 pb-4 mb-4"
                                >
                                    <td className="w-1/4 font-medium">Габариты</td>
                                    <td className="w-3/4">
                                        <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                            <Input type="text"  className='w-[100px]' placeholder="Высота" labelPlacement="outside-left"
                                                   isInvalid={false}
                                                   onValueChange={handleSelectGabarith}
                                                   value={gabarith}
                                            />
                                            <Input type="text" className='w-[100px]' placeholder="Длина" labelPlacement="outside-left"
                                                   onValueChange={handleSelectGabaritl} value={gabaritl}/>
                                            <Input type="text" className='w-[100px]' placeholder="Ширина" labelPlacement="outside-left"
                                                   onValueChange={handleSelectGabaritw} value={gabaritw}/>
                                            <div className="pointer-events-none flex items-center">
                                                <span className="text-default-400 text-small">мм</span>
                                            </div>
                                        </div>
                                    </td>
                                </motion.tr>
                            )}
                            {filesDownload && (
                                <>
                                    <motion.tr
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5}}
                                        className="border-b border-gray-300 pb-4 mb-4"
                                    >
                                        <td className="w-1/4 font-medium">Технология печати</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Dropdown>
                                                    <DropdownTrigger>
                                                        <div
                                                            className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                                                            <Input
                                                                type="text"
                                                                labelPlacement="outside-left"
                                                                endContent={
                                                                    <div
                                                                        className="pointer-events-none flex items-center">
                                                                        <span
                                                                            className="text-default-400 text-small">▼</span>
                                                                    </div>
                                                                }
                                                                value={selectedTechValue}
                                                                placeholder={'Выберите технологию'}
                                                            />
                                                        </div>
                                                    </DropdownTrigger>
                                                    <DropdownMenu
                                                        aria-label="Single selection example"
                                                        variant="flat"
                                                        disallowEmptySelection
                                                        selectionMode="single"
                                                        selectedKeys={selectedTechnology}
                                                        onSelectionChange={handleSelectTechnology}
                                                    >
                                                        <DropdownItem key="FDM/FFF">FDM/FFF</DropdownItem>
                                                        <DropdownItem key="SLA">SLA</DropdownItem>
                                                        <DropdownItem key="SLS">SLS</DropdownItem>
                                                        <DropdownItem key="SLM">SLM</DropdownItem>
                                                        <DropdownItem key="Мне нужна помощь">Мне нужна помощь</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </motion.tr>

                                    {isFdm && (
                                        <motion.tr
                                            initial={{opacity: 0, y: -20}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{duration: 0.5}}
                                            className="border-b border-gray-300 pb-4 mb-4"
                                        >
                                            <td className="w-1/4 font-medium">Материал печати</td>
                                            <td className="w-3/4">
                                                <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                    <Dropdown>
                                                        <DropdownTrigger>
                                                            <div
                                                                className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                                                                <Input
                                                                    type="text"
                                                                    labelPlacement="outside-left"
                                                                    endContent={
                                                                        <div
                                                                            className="pointer-events-none flex items-center">
                                                                        <span
                                                                            className="text-default-400 text-small">▼</span>
                                                                        </div>
                                                                    }
                                                                    value={selectedMaterialValue}
                                                                    placeholder={'Выберите материал'}
                                                                />
                                                            </div>
                                                        </DropdownTrigger>
                                                        <DropdownMenu
                                                            aria-label="Single selection example"
                                                            variant="flat"
                                                            disallowEmptySelection
                                                            selectionMode="single"
                                                            selectedKeys={selectedMaterial}
                                                            onSelectionChange={handleSelectMaterial}
                                                        >
                                                            <DropdownItem key={'PLA'}>PLA</DropdownItem>
                                                            <DropdownItem key={'ABS'}>ABS</DropdownItem>
                                                            <DropdownItem key={'ASA'}>ASA</DropdownItem>
                                                            <DropdownItem key={'PET/PETG'}>PET/PETG</DropdownItem>
                                                            <DropdownItem key={'PC'}>PC</DropdownItem>
                                                            <DropdownItem key={'CPE'}>CPE</DropdownItem>
                                                            <DropdownItem key={'PP'}>PP</DropdownItem>
                                                            <DropdownItem key={'TPU 95A'}>TPU 95A</DropdownItem>
                                                            <DropdownItem key={'PA'}>PA</DropdownItem>
                                                            <DropdownItem key={'TOUGH PLA'}>TOUGH PLA</DropdownItem>
                                                            <DropdownItem key={'PA-CF'}>PA-CF</DropdownItem>
                                                            <DropdownItem key={'PA-GF'}>PA-GF</DropdownItem>
                                                            <DropdownItem key={'ULTEM'}>ULTEM</DropdownItem>
                                                            <DropdownItem key="другой">Другой</DropdownItem>
                                                            <DropdownItem key="Мне нужна помощь">Мне нужна
                                                                помощь</DropdownItem>

                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    )}

                                    {isSla && (
                                        <motion.tr
                                            initial={{opacity: 0, y: -20}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{duration: 0.5}}
                                            className="border-b border-gray-300 pb-4 mb-4"
                                        >
                                            <td className="w-1/4 font-medium">Материал печати</td>
                                            <td className="w-3/4">
                                                <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                    <Dropdown>
                                                        <DropdownTrigger>
                                                            <div
                                                                className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                                                                <Input
                                                                    type="text"
                                                                    labelPlacement="outside-left"
                                                                    endContent={
                                                                        <div
                                                                            className="pointer-events-none flex items-center">
                                                                        <span
                                                                            className="text-default-400 text-small">▼</span>
                                                                        </div>
                                                                    }
                                                                    value={selectedMaterialValue}
                                                                    placeholder={'Выберите материал'}
                                                                />
                                                            </div>
                                                        </DropdownTrigger>
                                                        <DropdownMenu
                                                            aria-label="Single selection example"
                                                            variant="flat"
                                                            disallowEmptySelection
                                                            selectionMode="single"
                                                            selectedKeys={selectedMaterial}
                                                            onSelectionChange={handleSelectMaterial}

                                                        >
                                                            <DropdownItem key={'Clear'}>Clear</DropdownItem>
                                                            <DropdownItem key={'White'}>White</DropdownItem>
                                                            <DropdownItem key={'Grey'}>Grey</DropdownItem>
                                                            <DropdownItem key={'Black'}>Black</DropdownItem>
                                                            <DropdownItem key={'Flexible'}>Flexible</DropdownItem>
                                                            <DropdownItem key={'Elastic'}>Elastic</DropdownItem>
                                                            <DropdownItem key={'Rigid 10K'}>Rigid 10K</DropdownItem>
                                                            <DropdownItem key={'Rigid 4K'}>Rigid 4K</DropdownItem>
                                                            <DropdownItem key={'Tough 1500'}>Tough 1500</DropdownItem>
                                                            <DropdownItem key={'Tough 2000'}>Tough 2000</DropdownItem>
                                                            <DropdownItem key="другой">Другой</DropdownItem>
                                                            <DropdownItem key="Мне нужна помощь">Мне нужна
                                                                помощь</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    )}

                                    {isSls && (
                                        <motion.tr
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5}}
                                        className="border-b border-gray-300 pb-4 mb-4"
                                    >
                                        <td className="w-1/4 font-medium">Материал печати</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Dropdown>
                                                    <DropdownTrigger>
                                                        <div
                                                            className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                                                            <Input
                                                                type="text"
                                                                labelPlacement="outside-left"
                                                                endContent={
                                                                    <div
                                                                        className="pointer-events-none flex items-center">
                                                                        <span
                                                                            className="text-default-400 text-small">▼</span>
                                                                    </div>
                                                                }
                                                                value={selectedMaterialValue}
                                                                placeholder={'Выберите материал'}
                                                            />
                                                        </div>
                                                    </DropdownTrigger>
                                                    <DropdownMenu
                                                        aria-label="Single selection example"
                                                        variant="flat"
                                                        disallowEmptySelection
                                                        selectionMode="single"
                                                        selectedKeys={selectedMaterial}
                                                        onSelectionChange={handleSelectMaterial}

                                                    >
                                                        <DropdownItem key={'PA12'}>PA12</DropdownItem>
                                                        <DropdownItem key="другой">Другой</DropdownItem>
                                                        <DropdownItem key="Мне нужна помощь">Мне нужна
                                                            помощь</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </motion.tr>)}

                                    {isSlm && (
                                        <motion.tr
                                            initial={{opacity: 0, y: -20}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{duration: 0.5}}
                                            className="border-b border-gray-300 pb-4 mb-4"
                                        >
                                            <td className="w-1/4 font-medium">Материал печати</td>
                                            <td className="w-3/4">
                                                <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                    <Dropdown>
                                                        <DropdownTrigger>
                                                            <div
                                                                className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                                                                <Input
                                                                    type="text"
                                                                    labelPlacement="outside-left"
                                                                    endContent={
                                                                        <div
                                                                            className="pointer-events-none flex items-center">
                                                                        <span
                                                                            className="text-default-400 text-small">▼</span>
                                                                        </div>
                                                                    }
                                                                    value={selectedMaterialValue}
                                                                    placeholder={'Выберите материал'}
                                                                />
                                                            </div>
                                                        </DropdownTrigger>
                                                        <DropdownMenu
                                                            aria-label="Single selection example"
                                                            variant="flat"
                                                            disallowEmptySelection
                                                            selectionMode="single"
                                                            selectedKeys={selectedMaterial}
                                                            onSelectionChange={handleSelectMaterial}

                                                        >
                                                            <DropdownItem key={'Алюминий (AlSi10Mg)'}>Алюминий
                                                                (AlSi10Mg)</DropdownItem>
                                                            <DropdownItem key={'Нержавеющая сталь (AISI 316L)'}>Нержавеющая
                                                                сталь (AISI 316L)</DropdownItem>
                                                            <DropdownItem key={'Титан (TC4)'}>Титан (TC4)</DropdownItem>
                                                            <DropdownItem key={'Кобольт-Хром (СoCrMo)'}>Кобольт-Хром
                                                                (СoCrMo)</DropdownItem>
                                                            <DropdownItem key="другой">Другой</DropdownItem>
                                                            <DropdownItem key="Мне нужна помощь">Мне нужна
                                                                помощь</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    )}

                                    {needHelp && (
                                        <>
                                            <motion.tr
                                                initial={{opacity: 0, y: -20}}
                                                animate={{opacity: 1, y: 0}}
                                                transition={{duration: 0.5}}
                                                className="border-b border-gray-300 pb-4 mb-4"
                                            >
                                                <td className="w-1/4 font-medium">Нагрузки</td>
                                                <td className="w-3/4">
                                                    <div
                                                        className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                        <Textarea  placeholder="Укажите нагрузки"  className="max-w-xs" value={pressure}
                                                               onValueChange={handleSelectPreasure}/>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                            <motion.tr
                                                initial={{opacity: 0, y: -20}}
                                                animate={{opacity: 1, y: 0}}
                                                transition={{duration: 0.5}}
                                                className="border-b border-gray-300 pb-4 mb-4"
                                            >
                                                <td className="w-1/4 font-medium">Условия эксплуатации</td>
                                                <td className="w-3/4">
                                                    <div
                                                        className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                        <Textarea placeholder="Опишите условия эксплуатации" value={uses}
                                                               onValueChange={handleSelectUses}  className="max-w-xs"
                                                              />
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        </>
                                    )}

                                    <motion.tr
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5}}
                                        className="border-b border-gray-300 pb-4 mb-4"
                                    >
                                    <td className="w-1/4 font-medium">Количество</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3 w-fit">
                                                <Input placeholder="Введите количество"
                                                       value={count} onValueChange={handleSelectCount}/>

                                                <div className="pointer-events-none flex items-center">
                                                    <span className="text-default-400 text-small">шт</span>
                                                </div>
                                            </div>
                                        </td>
                                    </motion.tr>

                                    <motion.tr
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5}}
                                        className="border-b border-gray-300 pb-4 mb-4"
                                    >
                                        <td className="w-1/4 font-medium">Комментарий</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Textarea placeholder="Дополнительная информация о запросе"
                                                          value={comment} className="max-w-xs"
                                                          onValueChange={handleSelectComment}/>
                                            </div>
                                        </td>
                                    </motion.tr>

                                    <motion.tr
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5}}
                                        className="border-b border-gray-300 pb-4 mb-4"
                                    >
                                        <td className="w-1/4 font-medium">Номер телефона</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="Контактный телефон" type="text"
                                                       labelPlacement="outside-left"
                                                       isRequired
                                                       onValueChange={handleSelectNumber}
                                                       isInvalid={isInvalidNumber}
                                                       color={isInvalidNumber ? "danger" : "default"}
                                                       errorMessage="Формат ввода +375ххххххххх или 80ххххххххх"
                                                       value={number}/>
                                            </div>
                                        </td>
                                    </motion.tr>

                                    <motion.tr
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5}}
                                        className="border-b border-gray-300 pb-4 mb-4"
                                    >
                                        <td className="w-1/4 font-medium">Электронная почта</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="Ваша электронная почта"
                                                       labelPlacement="outside-left" value={mail}
                                                       onValueChange={handleSelectMail}/>
                                            </div>
                                        </td>
                                    </motion.tr>

                                    <motion.tr
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5}}
                                        className="border-b border-gray-300 pb-4 mb-4"
                                    >
                                        <td className="w-1/4 font-medium">ФИО</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="ФИО" labelPlacement="outside-left" isRequired
                                                       onValueChange={handleSelectFio} isInvalid={isInvalidFio}
                                                       errorMessage="Пожалуйста, представьтесь" value={fio}/>
                                            </div>
                                        </td>
                                    </motion.tr>

                                    <motion.tr
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5}}
                                        className="pb-4"
                                    >
                                        <td className="w-1/4 font-medium">Организация</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="Ваша организация" labelPlacement="outside-left"
                                                       value={org} onValueChange={handleSelectOrg}/>
                                            </div>
                                        </td>
                                    </motion.tr>
                                </>
                            )}
                        </table>

                        <div>
                            <Button className="mt-3" color="primary" isDisabled={disableForm()}
                                    onClick={handleCreateOrder}>Сделать заказ</Button>
                        </div>
                    </div>
                </div>
            </section>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    Тестовая форма
                                </p>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default Page;
