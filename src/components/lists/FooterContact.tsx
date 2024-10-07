import FooterHeader from "../headers/FooterHeader"
import { FaLocationDot } from "react-icons/fa6";

const FooterContacts = () => {
    return (
        <div>
            <FooterHeader header="Contact us" />
            <ul className="mt-5 flex flex-col items-start justify-start space-y-3 text-white text-lg">
                <li className="flex items-center space-x-2 text-white text-lg">
                    <FaLocationDot className="w-5 h-5" />
                    <a href="#">Rruga pandi dardha, Tirana</a>
                </li>
                <li className="flex items-center space-x-2 text-white text-lg">
                    <FaLocationDot className="w-5 h-5" />
                    <a href="#">Rruga pandi dardha, Tirana</a>
                </li>
                <li className="flex items-center space-x-2 text-white text-lg">
                    <FaLocationDot className="w-5 h-5" />
                    <a href="#">Rruga pandi dardha, Tirana</a>
                </li>
                <li className="flex items-center space-x-2 text-white text-lg">
                    <FaLocationDot className="w-5 h-5" />
                    <a href="#">Rruga pandi dardha, Tirana</a>
                </li>
            </ul>
        </div>
    )
}

export default FooterContacts