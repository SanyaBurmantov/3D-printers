'use client'
import React from 'react';
import Link from "next/link";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";

const Page = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>

        <div>
            <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
                <div className="container">

                    <div className="-mx-4 flex flex-wrap lg:justify-between">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <div className="mb-12 max-w-[570px] lg:mb-0">

                                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                    FFF/FDM
                                </h2>
                                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                    Зацени это бля! Хули ты сучка
                                </p>
                                <Link href={'/'}
                                      className="mb-9 bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
                                >
                                    Пиздец, назад
                                </Link>

                                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores aut
                                    cumque deleniti doloremque incidunt laboriosam, laudantium, magni modi nesciunt
                                    nihil, nulla quo ratione sit ullam? Animi aperiam assumenda commodi consequatur,
                                    debitis dolor dolore dolorem eos et excepturi laborum molestias non numquam odit
                                    omnis quasi quia repudiandae saepe, sit voluptatem!
                                </p>
                            </div>
                            <Link href={'/create_order'}
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
                            >
                                Дайте два блять
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            <Modal
                isOpen={isOpen}
                placement={'center'}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
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