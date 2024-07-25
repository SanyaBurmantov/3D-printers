'use client'
import React, {useEffect} from 'react';
import {Checkbox} from "@nextui-org/checkbox";
import {AttachmentsFileInput} from "@/components/Inputs/AttachmentFileInput";
import {Input, Textarea} from "@nextui-org/input";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";

const Page = () => {
    const [needScan, setNeedScan] = React.useState(false);
    const [needModel, setNeedModel] = React.useState(false);
    const [needPrint, setNeedPrint] = React.useState(false);
    const [needHelp, setNeedHelp] = React.useState(false);
    const [filesDownload, setFilesDownload] = React.useState(false);
    const [selectedTechnology, setSelectedTechnology] = React.useState(new Set(["FDM/FFF"]));
    const [selectedMaterial, setSelectedMaterial] = React.useState(new Set(["FLEX"]));
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

    const handleCreateOrder = (e: any) => {
        onOpen()
        e.preventDefault()

        if (mail === "" || fio === "" || number === "") {
            return null
        }

        fetch(`/api/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "нужно сканирование": needScan,
                "нужно моделирование": needModel,
                "нужна печать": needPrint,
                "габариты": gabarit,
                "технология": selectedTechnology.values().next().value,
                "материал": selectedMaterial.values().next().value,
                "колличество": count,
                "нагрузки": pressure,
                "использование": uses,
                "коммент": comment,
                "номер телефона": number,
                "почта": mail,
                "фио": fio,
                "организация": org,
            })
        })
            .then(r => r.json())
            .then(d => {
                if (d?.ok) {
                    // setIsSended(true)
                }
            })
            .catch(e => console.log(e.message))
        return {

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
        if(selectedMaterial.has("Мне нужна помощь")){
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
                            <AttachmentsFileInput downloadFilesCallback={handleFilesDownload}/>
                        </>
                    )}
                    <div className="flex flex-col gap-4 mt-6">
                        <table className="w-full border-collapse">
                            {filesDownload && needScan && (
                                <tr className="border-b border-gray-300 pb-4 mb-4">
                                    <td className="w-1/4 font-medium">Габариты</td>
                                    <td className="w-3/4">
                                        <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                            <Input
                                                type="number"
                                                placeholder="0"
                                                labelPlacement="outside-left"
                                                endContent={
                                                    <div className="pointer-events-none flex items-center">
                                                        <span className="text-default-400 text-small">мм</span>
                                                    </div>
                                                }
                                                onValueChange={handleSelectGabarit}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            )}
                            {filesDownload && (
                                <>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Технология печати</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Dropdown>
                                                    <DropdownTrigger>
                                                        {/*<Button variant="bordered" className="capitalize">*/}
                                                        {/*    {selectedTechValue}*/}
                                                        {/*</Button>*/}
                                                        <div
                                                            className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                                                            <Input
                                                                type="text"
                                                                labelPlacement="outside-left"
                                                                endContent={
                                                                    <div
                                                                        className="pointer-events-none flex items-center">
                                                                        <span
                                                                            className="text-default-400 text-small">
                                                                               ▼
                                                                        </span>
                                                                    </div>
                                                                }
                                                                value={selectedTechValue}
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
                                    </tr>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Материал печати</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Dropdown>
                                                    <DropdownTrigger>
                                                        {/*<Button variant="bordered" className="capitalize">*/}
                                                        {/*    {selectedMaterialValue}*/}
                                                        {/*</Button>*/}
                                                        <div
                                                            className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                                                            <Input
                                                                type="text"
                                                                labelPlacement="outside-left"
                                                                endContent={
                                                                    <div
                                                                        className="pointer-events-none flex items-center">
                                                                        <span
                                                                            className="text-default-400 text-small">
                                                                               ▼
                                                                        </span>
                                                                    </div>
                                                                }
                                                                value={selectedMaterialValue}
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
                                                        <DropdownItem key="Мне нужна помощь">Мне нужна помощь</DropdownItem>

                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </tr>
                                    {needHelp && (
                                        <>
                                            <tr className="border-b border-gray-300 pb-4 mb-4">
                                                <td className="w-1/4 font-medium">Нагрузки</td>
                                                <td className="w-3/4">
                                                    <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                        <Input placeholder="Укажите нагрузки" labelPlacement="outside-left" value={pressure} onValueChange={handleSelectPreasure}/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-gray-300 pb-4 mb-4">
                                                <td className="w-1/4 font-medium">Условия эксплуатации</td>
                                                <td className="w-3/4">
                                                    <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                        <Input placeholder="Опишите условия эксплуатации" value={uses} onValueChange={handleSelectUses}
                                                               labelPlacement="outside-left"/>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    )}
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Количество</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="Введите количество" labelPlacement="outside-left" value={count} onValueChange={handleSelectCount}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Комментарий</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Textarea placeholder="Ваш комментарий" value={comment} className="max-w-xs" onValueChange={handleSelectComment}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Номер</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input
                                                    placeholder="Контактный телефон"
                                                    type="number"
                                                    labelPlacement="outside-left"
                                                    isRequired
                                                    isInvalid={isInvalidNumber}
                                                    onValueChange={handleSelectNumber}
                                                    errorMessage="Пожалуйста, введите номер телефона"
                                                    value={number}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Почта</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="Ваша почта" labelPlacement="outside-left" value={mail} onValueChange={handleSelectMail}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Ваши ФИО</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input
                                                    placeholder="ФИО"
                                                    labelPlacement="outside-left"
                                                    isRequired
                                                    onValueChange={handleSelectFio}
                                                    isInvalid={isInvalidFio}
                                                    errorMessage="Пожалуйста, представьтесь"
                                                    value={fio}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="pb-4">
                                        <td className="w-1/4 font-medium">Организация</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="Ваша организация" labelPlacement="outside-left" value={org} onValueChange={handleSelectOrg}/>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )}
                        </table>
                        {!isInvalidFio && !isInvalidNumber && fio && number && (<div>
                            <Button className="mt-3" color="primary" onClick={handleCreateOrder}>Сделать заказ</Button>
                        </div>)}
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
                                    Жди звонка, мы тебя найдем!
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
