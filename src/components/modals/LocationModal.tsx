import { useContext, useEffect, useState } from "react"
import ModalClass from "../classes/ModalClass"
import MapWithAutocomplete from "../map/MapWithAutocomplete"
import { MapAutocompleteContext } from "../../contexts/MapAutocompleteContext"
import axios from "axios"
import ResultModal from "./ResultModal"

const LocationModal = () => {
    const map = useContext(MapAutocompleteContext)
    const [message, setMessage] = useState("")

    const submitLocation = () => {
        axios.post("http://localhost:5000/addLocation", {
            location: map.location,
            lat: map.lat,
            lng: map.lng
        })
        .then(res => {
            setMessage(res.data.message)
            axios.post("http://localhost:5000/getLocations")
        })
        .catch(err => setMessage(err.message))
    }

    return (
        <ModalClass label="Add location" buttonEvent={submitLocation}>
            <MapWithAutocomplete />
            {message && <ResultModal message={message} closeModal={() => setMessage("")} />}
        </ModalClass>
    )
}

export default LocationModal