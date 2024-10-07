import { useContext } from "react"
import SectionHeader from "../../components/headers/SectionHeader"
import Map from "../../components/map/Map"
import { LocationContext } from "../../contexts/LocationContext"

const Home_7 = () => {
    const locations = useContext(LocationContext)
    return (
        <div className="max-w-screen-xl mx-auto px-5 " id="div_4">
            <SectionHeader header="Locations" />
            <div className="grid min-[400px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center place-content-center gap-y-5 gap-x-5 lg:gap-y-0">
                {locations.locations.length > 0 && locations.locations.map(item => {
                    return (
                        <Map key={item.id} lat={item.lat} lng={item.lng} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home_7