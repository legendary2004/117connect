import FooterHeader from "../headers/FooterHeader"
import FooterLink from "../listItems/FooterLink"

const FooterLinks = () => {
    return (
        <div>
            <FooterHeader header="Navigation" />
            <ul className="mt-5 flex flex-col items-start justify-start space-y-3 text-white text-lg">
                <FooterLink id="div_1" label="About us" /> 
                <FooterLink id="div_2" label="Our service" /> 
                <FooterLink id="div_3" label="Why choose us" /> 
                <FooterLink id="div_4" label="Locations" /> 
                <FooterLink id="div_5" label="Contacts" /> 
            </ul>
        </div>
    )
}

export default FooterLinks