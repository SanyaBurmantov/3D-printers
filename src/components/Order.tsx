'use client'
import React, {useEffect, useState} from 'react';
import {Checkbox} from "@nextui-org/checkbox";
import nodemailer from 'nodemailer';
import {Input, Textarea} from "@nextui-org/input";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import {AnimatePresence, motion} from 'framer-motion';
import {AttachmentsFileInput} from "@/components/Inputs/AttachmentFileInput";
import { useForm, ValidationError } from '@formspree/react';
import axios from "axios";

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
    const [selectedTechnology, setSelectedTechnology] = React.useState(new Set([]));
    const [selectedMaterial, setSelectedMaterial] = React.useState(new Set([]));
    const [selectedSomething, setSelectedSomething] = React.useState(false)
    const [gabarit, setGabarit] = React.useState('');
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
    const handleSelectGabarit = (value: any) => {
        setGabarit(value);
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
        return value.length > 7
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

    const handleCreateOrder = async (e: any) => {

        e.preventDefault()
        const token = "6534530183:AAE0eiwpeM-VsL2ZUjwjXRKU49KfExqlmdc";
        const users = ["408745156"];
        const message =
            `   
                %0A%0A ** Заявка **  %0A%0A
                Клиент: ${fio} %0A%0A
                номер телефона: ${number} %0A%0A
                почта: ${mail} %0A%0A
                организация: ${org} %0A%0A
                 %0A%0A ** Описание  %0A%0A
                нужно сканирование: ${needScan ? 'Да' : 'Нет'} %0A%0A
                нужно моделирование: ${needModel ? 'Да' : 'Нет'} %0A%0A
                нужна печать: ${needPrint ? 'Да' : 'Нет'} %0A%0A
                габариты: ${gabarit} %0A%0A
                технология: ${selectedTechnology.values().next().value} %0A%0A
                материал: ${selectedMaterial.values().next().value} %0A%0A
                количество: ${count} %0A%0A
                нагрузки: ${pressure} %0A%0A
                использование: ${uses} %0A%0A
                комментарий: ${comment} %0A%0A
                
            `
        ;
        const requests = [];

        try {
            const formData = new FormData();
            files.forEach((file, index) => {
                formData.append(`file${index}`, URL.createObjectURL(file));
                console.log(file)
            });

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
                const sendDocumentData = formData;
                sendDocumentData.append('chat_id', user);

                const sendMessagePromise = axios.post(sendMessageUrl, sendMessageData, sendMessageConfig);
                const sendDocumentPromise = axios.post(sendDocumentUrl, sendDocumentData, sendDocumentConfig);

                requests.push(sendMessagePromise);
                requests.push(sendDocumentPromise);
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
        if (!isInvalidFio && !isInvalidNumber && !fio && !number)
            return true
        return isInvalidFio && isInvalidNumber && !fio && !number
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
        // @ts-ignore
        if (selectedMaterial.has("Мне нужна помощь")) {
            setNeedHelp(true)
        } else {
            setNeedHelp(false)
        }
    }, [selectedMaterial])

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
                                        <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3 w-fit">
                                            <Input type="number" placeholder="Высота" labelPlacement="outside-left"
                                                   onValueChange={handleSelectGabarit}/>
                                            <Input type="number" placeholder="Длина" labelPlacement="outside-left"
                                                   onValueChange={handleSelectGabarit}/>
                                            <Input type="number" placeholder="Ширина" labelPlacement="outside-left"
                                                   onValueChange={handleSelectGabarit}/>
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
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </motion.tr>

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
                                                        <DropdownItem key="FLEX">FLEX</DropdownItem>
                                                        <DropdownItem key="HIPS">HIPS</DropdownItem>
                                                        <DropdownItem key="PVA">PVA</DropdownItem>
                                                        <DropdownItem key="PETG">PETG</DropdownItem>
                                                        <DropdownItem key="PLA">PLA</DropdownItem>
                                                        <DropdownItem key="Nylon">Nylon</DropdownItem>
                                                        <DropdownItem key="Polycarbonate">Polycarbonate</DropdownItem>
                                                        <DropdownItem key="ABS">ABS</DropdownItem>
                                                        <DropdownItem key="PP">PP</DropdownItem>
                                                        <DropdownItem key="Мне нужна помощь">Мне нужна
                                                            помощь</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </motion.tr>

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
                                                        <Input placeholder="Укажите нагрузки"
                                                               labelPlacement="outside-left" value={pressure}
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
                                                        <Input placeholder="Опишите условия эксплуатации" value={uses}
                                                               onValueChange={handleSelectUses}
                                                               labelPlacement="outside-left"/>
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
                                                <Input placeholder="Контактный телефон" type="number"
                                                       labelPlacement="outside-left" isRequired
                                                       isInvalid={isInvalidNumber} onValueChange={handleSelectNumber}
                                                       errorMessage="Пожалуйста, введите номер телефона"
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
                                        <td className="w-1/4 font-medium">Ваши ФИО</td>
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
