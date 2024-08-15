'use client'
import React from 'react';
import styles from './ui.module.scss'
import { FiHelpCircle } from "react-icons/fi";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/input";


const HelpBtn = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            <button
                className={`${styles.helpBtn} z-50 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-l-2xl bg-primary hover:bg-blue-dark lg:px-7`}
                onClick={onOpen}
            >
                <FiHelpCircle /> <p className={`pl-2 ${styles.textPc}`}> Мне нужна помощь </p>
            </button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center font-bold text-lg">
                                Возникли вопросы?
                            </ModalHeader>
                            <ModalBody className="p-8">
                                <p className="mb-0">
                                    Позвоните нам по номеру:
                                </p>
                                <p className="mb-4 font-mono text-lg">
                                    +375(33)xxx-xx-xx
                                </p>
                                <p className="mb-0">
                                    Или оставьте номер телефона и мы перезвоним
                                </p>
                                <Input type="number" placeholder="Введите номер телефона" className="p-2 w-full" />
                            </ModalBody>
                            <ModalFooter className="flex">
                                <Button color="danger" variant="light" onPress={onClose} className="bg-red-500 text-white hover:bg-red-600">
                                    Закрыть
                                </Button>
                                <Button color="primary" onPress={onClose} className="text-white hover:bg-blue-600">
                                    Перезвоните
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default HelpBtn;