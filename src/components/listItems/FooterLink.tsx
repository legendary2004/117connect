import { footerScrollTo } from "../functions/scrollTo";

interface footerLink {
    id: string;
    label: string;
}

const FooterLink = (prop: footerLink) => {
    return (
        <li>
            <a href="#" className="hover:text-sky-600 duration-500" onClick={() => footerScrollTo(prop.id)}>{prop.label}</a>
        </li>
    )
}

export default FooterLink