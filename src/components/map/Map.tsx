import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
  } from "react-leaflet";
  import "leaflet/dist/leaflet.css";
  import L from 'leaflet';

const icon = L.icon({ iconUrl: require("../images/marker-icon.png") });

interface coor {
    lat: number,
    lng: number
}

const MyComponent = (props: coor) => {
    const map = useMap()
    map.setView({lat: props.lat, lng: props.lng}, map.getZoom())
    return null
}

const Map = (props: coor) => {
    // const map = useMap()

    // useEffect(() => {
    //     map.setView({lat: props.lat, lng: props.lng}, map.getZoom())
    // }, [props])

    return (
        <MapContainer
          className="w-full h-[450px] border-0 rounded-xl"
          center={{lat: props.lat, lng: props.lng}}
          zoom={100}
        >
          {/* add google map tile url  */}
            <MyComponent lat={props.lat} lng={props.lng} />
            <Marker position={props} icon={icon}/>
          <TileLayer
            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />
        </MapContainer>
    )
}

export default Map