import { FormEvent } from "react";

interface admin {
    email: string;
    password: string;
}

interface contact {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phone: string;
    message: string;
}

export const adminObj: admin = {
    email: '',
    password: ''
}

export const contactObj: contact = {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
}

export const handleInputChange = (e: FormEvent<HTMLInputElement>, setChanges: Function) => {
    const {id, value} = e.currentTarget

    setChanges((prev: any) => {
        return {
            ...prev,
            [id]: value
        }
    })
}

export const handleTextAreaChange = (e: FormEvent<HTMLTextAreaElement>, setChanges: Function) => {
    const {id, value} = e.currentTarget

    setChanges((prev: any) => {
        return {
            ...prev,
            [id]: value
        }
    })
}