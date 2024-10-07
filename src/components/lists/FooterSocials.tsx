import FooterHeader from "../headers/FooterHeader"
import { FaFacebookF } from "react-icons/fa";


const FooterSocials = () => {
    return (
        <div>
            <FooterHeader header="Social Media" />
            <ul className="mt-5 flex items-center justify-center space-x-1.5">
                <li className="w-8 h-8 p-2 bg-sky-600 rounded-lg">
                    <FaFacebookF className="w-full h-full" />
                </li>
                <li className="w-8 h-8 p-2 bg-sky-600 rounded-lg">
                    <FaFacebookF className="w-full h-full" />
                </li>
                <li className="w-8 h-8 p-2 bg-sky-600 rounded-lg">
                    <FaFacebookF className="w-full h-full" />
                </li>
            </ul>
        </div>
    )
}

export default FooterSocials