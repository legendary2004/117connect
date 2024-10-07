import { initFlowbite } from "flowbite"
import Hamburger from "./Hamburger"
import NavBrand from "./NavBrand"
import NavLink from "./NavLink"
import { useContext, useEffect } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import { scrollTo } from "../functions/scrollTo"
import { useNavigate } from "react-router-dom"

const Nav = () => {
    const navigate = useNavigate()
    const admin = useContext(LoginContext)
    setTimeout(() => {
        initFlowbite()
    }, 500)

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavBrand />
                <Hamburger />
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:mt-0 md:divide-x-2 md:divide-sky-600 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavLink handleClick={() => scrollTo("div_1")} label="About us"/>
                        <NavLink handleClick={() => scrollTo("div_2")} label="Our services"/>
                        <NavLink handleClick={() => scrollTo("div_3")} label="Why us?"/>
                        <NavLink handleClick={() => scrollTo("div_4")} label="Locations"/>
                        <NavLink handleClick={() => scrollTo("div_5")} label="Contact us"/>
                        {admin.user.id && 
                            <>
                                <NavLink handleClick={() => navigate("/admin")} label="Admin" />
                                <NavLink handleClick={() => admin.signOut()} label="Sign out" />
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav