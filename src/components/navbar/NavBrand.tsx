import { useNavigate } from "react-router-dom"

const NavBrand = () => {
    const navigate = useNavigate()
    return (
        <a href="#" onClick={() => navigate("/")} className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">117Connect</span>
        </a>
    )
}

export default NavBrand