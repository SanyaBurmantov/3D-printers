'use client'
import React, {useEffect} from 'react';
import {Checkbox} from "@nextui-org/checkbox";
import {AttachmentsFileInput} from "@/components/Inputs/AttachmentFileInput";
import {Input, Textarea} from "@nextui-org/input";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/react";

const Page = () => {
    const [needScan, setNeedScan] = React.useState(false);
    const [needModel, setNeedModel] = React.useState(false);
    const [needPrint, setNeedPrint] = React.useState(false);
    const [filesDownload, setFilesDownload] = React.useState(false);
    const [selectedTechnology, setSelectedTechnology] = React.useState(new Set(["fdm/fff"]));
    const [selectedMaterial, setSelectedMaterial] = React.useState(new Set(["flex"]));
    const [selectedSomething, setSelectedSomething] = React.useState(false)

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

    return (
        <>
            <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
                <div className="container">
                    <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                        Заявка на расчет стоимости
                    </h2>
                    <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                        Зацени это бля! Хули ты сучка
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi asperiores atque deserunt
                        esse est eveniet incidunt ipsam, iure minus modi nostrum quidem reprehenderit rerum veniam,
                        vero, voluptatibus! Ab asperiores assumenda commodi error facilis fugit impedit iure laboriosam
                        molestias mollitia perspiciatis, possimus quaerat quod similique suscipit temporibus voluptate.
                        Dolor, quo?
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
                                                        <Button variant="bordered" className="capitalize">
                                                            {selectedTechValue}
                                                        </Button>
                                                    </DropdownTrigger>
                                                    <DropdownMenu
                                                        aria-label="Single selection example"
                                                        variant="flat"
                                                        disallowEmptySelection
                                                        selectionMode="single"
                                                        selectedKeys={selectedTechnology}
                                                        onSelectionChange={handleSelectTechnology}
                                                    >
                                                        <DropdownItem key="fdm/fff">FDM/FFF</DropdownItem>
                                                        <DropdownItem key="sla">SLA</DropdownItem>
                                                        <DropdownItem key="sls">SLS</DropdownItem>
                                                        <DropdownItem key="slm">SLM</DropdownItem>
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
                                                        <Button variant="bordered" className="capitalize">
                                                            {selectedMaterialValue}
                                                        </Button>
                                                    </DropdownTrigger>
                                                    <DropdownMenu
                                                        aria-label="Single selection example"
                                                        variant="flat"
                                                        disallowEmptySelection
                                                        selectionMode="single"
                                                        selectedKeys={selectedMaterial}
                                                        onSelectionChange={handleSelectMaterial}
                                                    >
                                                        <DropdownItem key="flex">FLEX</DropdownItem>
                                                        <DropdownItem key="hips">HIPS</DropdownItem>
                                                        <DropdownItem key="pva">PVA</DropdownItem>
                                                        <DropdownItem key="petg">PETG</DropdownItem>
                                                        <DropdownItem key="pla">PLA</DropdownItem>
                                                        <DropdownItem key="nylon">Nylon</DropdownItem>
                                                        <DropdownItem key="polycarbonate">Polycarbonate</DropdownItem>
                                                        <DropdownItem key="abs">ABS</DropdownItem>
                                                        <DropdownItem key="pp">PP</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Нагрузки</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="Укажите нагрузки" labelPlacement="outside-left"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Условия эксплуатации</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="Опишите условия эксплуатации"
                                                       labelPlacement="outside-left"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Количество</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="Введите количество" labelPlacement="outside-left"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Комментарий</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Textarea placeholder="Ваш комментарий" className="max-w-xs"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Номер</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="Контактный телефон" labelPlacement="outside-left"
                                                       required={true}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Почта</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="Ваша почта" labelPlacement="outside-left"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 pb-4 mb-4">
                                        <td className="w-1/4 font-medium">Ваши ФИО</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="ФИО" labelPlacement="outside-left" required={true}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="pb-4">
                                        <td className="w-1/4 font-medium">Организация</td>
                                        <td className="w-3/4">
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center m-3">
                                                <Input placeholder="Ваша организация" labelPlacement="outside-left"/>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )}
                        </table>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Page;
