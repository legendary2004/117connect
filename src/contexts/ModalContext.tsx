import React, { createContext, PropsWithChildren, useState } from "react";

interface modalTypes {
    isTextVisible: boolean;
    isImgVisible: boolean;
    isServiceVisible: boolean;
    isLocationVisible: boolean;
}

interface modal {
    isModalVisible: modalTypes;
    classes: string;
    id: string;
    open: Function;
    close: Function;
}

const initModal: modalTypes = {
    isImgVisible: false,
    isLocationVisible: false,
    isServiceVisible: false,
    isTextVisible: false
}

export const ModalContext = createContext<modal>({
    isModalVisible: initModal,
    classes: "",
    id: "",
    open: () => {},
    close: () => {}
})

const ModalContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [isModalVisible, setIsModalVisible] = useState(initModal)
    const [classes, setClasses] = useState("")
    const [id, setId] = useState("")

    const open = (id: string, type: string) => {
        const modal = {...isModalVisible}
        if (type == 'text') modal.isTextVisible = true
        else if (type == 'image') modal.isImgVisible = true
        else if (type == 'location') modal.isLocationVisible = true
        else modal.isServiceVisible = true
        setIsModalVisible(modal)
        setClasses("animate-in slide-in-from-top")
        setId(id)
        document.body.style.overflow = "hidden"
    }

    const close = () => {
        setClasses("animate-out slide-out-to-top")
        setTimeout(() => {
            setIsModalVisible(initModal)
            setClasses("")
            document.body.style.overflow = "unset"
        }, 500)
    }
    return (
        <ModalContext.Provider value={{isModalVisible, classes, id, open, close}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider