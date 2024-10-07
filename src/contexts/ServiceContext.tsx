import axios from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface service {
    id: string;
    name: string;
    description: string;
    file: any
}

interface services {
    services: service[];
    removeService: Function
}

export const ServiceContext = createContext<services>({
    services: [],
    removeService: () => {}
})

const ServiceContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.post("http://localhost:5000/getServices")
        .then(res => setServices(res.data.result))
    }, [services])

    const removeService = (id: string) => {
        axios.post("http://localhost:5000/removeService", {
            id
        })
        .then(res => setServices(res.data.result))
    }
    return (
        <ServiceContext.Provider value={{services, removeService}}>
            {children}
        </ServiceContext.Provider>
    )
}

export default ServiceContextProvider