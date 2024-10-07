import axios from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface location {
    id: string;
    location: string;
    lat: number;
    lng: number;
}

interface locations {
    locations: location[];
    removeLocation: Function;
}

export const LocationContext = createContext<locations>({
    locations: [],
    removeLocation: () => {}
})

const LocationContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios.post("http://localhost:5000/getLocations")
        .then(res => setLocations(res.data.result))
    }, [locations])

    const removeLocation = (id: string) => {
        axios.post("http://localhost:5000/removeLocation", {
            id
        })
        .then(res => setLocations(res.data.result))
    }
    
    return (
        <LocationContext.Provider value={{locations, removeLocation}}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContextProvider