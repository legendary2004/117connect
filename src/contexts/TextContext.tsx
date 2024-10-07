import axios from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface element {
    id: string;
    element: string;
}

interface image {
    id: string;
    file: string;
}

interface elements {
    elements: element[]
    images: image[]
}

export const TextImageContext = createContext<elements>({
    elements: [],
    images: []
})

const TextImageContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [elements, setElements] = useState([])
    const [images, setImages] = useState([])
    
    useEffect(() => {
        axios.post("http://localhost:5000/getTexts")
        .then(res => setElements(res.data.result))
    }, [])

    useEffect(() => {
        axios.post("http://localhost:5000/getImages")
        .then(res => setImages(res.data.result))
    }, [])

    return (
        <TextImageContext.Provider value={{elements, images}}>
            {children}
        </TextImageContext.Provider>
    )
}

export default TextImageContextProvider