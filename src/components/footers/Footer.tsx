import Newsletter from "../buttons/Newsletter"
import FooterContacts from "../lists/FooterContact"
import FooterLinks from "../lists/FooterLinks"
import FooterSocials from "../lists/FooterSocials"

const Footer = () => {
    return (
        <footer className="mt-20 bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-5 py-6 lg:py-16">
                <div className="w-full flex justify-between flex-wrap space-x-5">
                    <Newsletter />
                    <FooterLinks />
                    <FooterSocials />
                    <FooterContacts />
                </div>
            </div>
        </footer>
    )
}

export default Footer