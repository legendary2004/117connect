import FooterHeader from "../headers/FooterHeader"

const Newsletter = () => {
    return (
        <div className="">
            <FooterHeader header="Sign up to our newsletter" />
            <p className="my-3 text-lg text-white">Subscribe to get special offers and updates</p>
            <div className="flex items-center rounded-full justify-center">
                <input className="w-full p-3 bg-white rounded-l-full border-0 placeholder:text-gray-400 focus:ring-0" type="email" placeholder="Email"/>
                <button className="bg-sky-600 py-3 px-5 sm:px-10 text-center text-white font-semibold rounded-r-full">Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter