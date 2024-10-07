import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import { useContext, useState } from 'react';
import Map from './Map';
import { MapAutocompleteContext } from '../../contexts/MapAutocompleteContext';

const MapWithAutocomplete = () => {
    const map = useContext(MapAutocompleteContext)

    return (
        <div>
            <Map lat={map.lat} lng={map.lng}/>
            <div className='mt-3 w-full mx-auto'>
                <GeoapifyContext apiKey="f733098156de45c78c4a77c1ac1e67f7">
                    <GeoapifyGeocoderAutocomplete
                        limit={50}
                        placeholder="Enter address here"
                        placeSelect={(value: GeoJSON.Feature) => map.onPlaceSelect(value)}
                        suggestionsChange={(value: GeoJSON.Feature[]) => map.onSuggestionChange(value)}
                    />
                </GeoapifyContext>
            </div>
        </div>
    )
}

export default MapWithAutocomplete