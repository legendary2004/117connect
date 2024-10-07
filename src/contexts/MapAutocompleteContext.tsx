import { createContext, PropsWithChildren, useState } from "react"

interface map {
    location: string;
    lat: number;
    lng: number;
    onPlaceSelect: Function;
    onSuggestionChange: Function
}

export const MapAutocompleteContext = createContext<map>({
    location: '',
    lat: 0,
    lng: 0,
    onPlaceSelect: () => {},
    onSuggestionChange: () => {}
})

const MapAutocompleteContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [pos, setPos] = useState({lat: 0, lng: 0})
    const [location, setLocation] = useState("")

    function onPlaceSelect(value: GeoJSON.Feature) {
        if (value) {
            setLocation(value.properties?.formatted)
            setPos({lat: value?.properties?.lat , lng: value?.properties?.lon})
        }
    }
    
    function onSuggestionChange(value: GeoJSON.Feature[]) {
        console.log(value);
    }

    return (
        <MapAutocompleteContext.Provider value={{location, lat: pos.lat, lng: pos.lng, onPlaceSelect, onSuggestionChange}}>
            {children}
        </MapAutocompleteContext.Provider>
    )
}

export default MapAutocompleteContextProvider