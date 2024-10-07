import { scrollTo } from "../functions/scrollTo"

interface id {
    label: string
    handleClick: Function
}

const NavLink = (prop: id) => {
    return (
        <li>
            <a href="#" onClick={() => prop.handleClick()} className="block py-3 px-5 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:py-0 dark:text-white md:dark:text-blue-500" aria-current="page">{prop.label}</a>
        </li>
    )
}

export default NavLink