import { useContext, useEffect, useState } from "react"
import Nav from "../components/navbar/Nav"
import { LoginContext } from "../contexts/LoginContext"
import { useNavigate } from "react-router-dom"
import Table from "../components/classes/Table"
import THead from "../components/classes/THead"
import THeader from "../components/listItems/THeader"
import TRow from "../components/classes/TRow"
import TData from "../components/listItems/TData"
import RemoveTableItem from "../components/buttons/RemoveTableItem"
import MapWithAutocomplete from "../components/map/MapWithAutocomplete"
import AddItem from "../components/buttons/AddItem"
import { ModalContext } from "../contexts/ModalContext"
import LocationModal from "../components/modals/LocationModal"
import axios from "axios"
import { LocationContext } from "../contexts/LocationContext"
import SectionHeader from "../components/headers/SectionHeader"
import ServiceModal from "../components/modals/ServiceModal"
import { ServiceContext } from "../contexts/ServiceContext"

const Admin = () => {
    const navigate = useNavigate()
    const admin = useContext(LoginContext)
    const modal = useContext(ModalContext)
    const locations = useContext(LocationContext)
    const services = useContext(ServiceContext)

    useEffect(() => {
        if (!admin.user.id) navigate("/")
    }, [admin.user])

    return (
        <div>
            <Nav />
            <div className="max-w-screen-xl mx-auto px-3 my-10">
                <div>
                    <SectionHeader header="Manage locations" />
                    <Table>
                        <THead>
                            <THeader label="LocationId" />
                            <THeader label="Address" />
                            <THeader label="Latitude" />
                            <THeader label="Longitude" />
                            <THeader label="" />
                        </THead>
                        <tbody>
                            {locations.locations.length > 0 && locations.locations.map((item) => {
                                return (
                                    <TRow key={item.id}>
                                        <TData label={item.id} />
                                        <TData label={item.location} />
                                        <TData label={Number(item.lat)} />
                                        <TData label={Number(item.lng)} />
                                        <RemoveTableItem id={item.id} remove={() => locations.removeLocation(item.id)}/>
                                    </TRow>
                                )
                            })}
                            <TRow>
                                <AddItem label="Add location" colSpan={5} buttonEvent={() => modal.open("", "location")} />
                            </TRow>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <SectionHeader header="Manage services" />
                    <Table>
                        <THead>
                            <THeader label="ServiceId" />
                            <THeader label="Service name" />
                            <THeader label="Service description" />
                            <THeader label="" />
                        </THead>
                        <tbody>
                            {services.services.length > 0 && services.services.map(item => {
                                return (
                                    <TRow key={item.id}>
                                        <TData label={item.id} />
                                        <TData label={item.name} />
                                        <TData label={item.description} />
                                        <RemoveTableItem id={item.id} remove={() => services.removeService(item.id)} />
                                    </TRow>
                                )
                            })}
                            <TRow>
                                <AddItem label="Add service" colSpan={4} buttonEvent={() => modal.open("", "service")} />
                            </TRow>
                        </tbody>
                    </Table>
                </div>
            </div>
            {modal.isModalVisible.isLocationVisible && <LocationModal /> }
            {modal.isModalVisible.isServiceVisible && <ServiceModal /> } 
        </div>
    )
}

export default Admin