import { useContext, useEffect } from "react";
import WhatWeDoButton from "../../components/buttons/WhatWeDoButton";
import SectionHeader from "../../components/headers/SectionHeader"
import { IoPersonAddSharp } from "react-icons/io5";
import { ServiceContext } from "../../contexts/ServiceContext";
import ServiceCard from "../../cards/ServiceCard";

const Home_3 = () => {
    const service = useContext(ServiceContext)
    return (
        <div className="max-w-screen-xl mx-auto px-5" id="div_2">
            <SectionHeader header="What we do?"/>
            <div className="grid grid-cols-3 place-items-center gap-5">
                {service.services.length > 0 && service.services.map(item => {
                    return (
                        <ServiceCard key={item.id} id={item.id} name={item.name} description={item.description} file={item.file} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home_3