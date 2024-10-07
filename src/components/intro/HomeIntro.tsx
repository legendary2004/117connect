import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import EditContent from "../buttons/EditContent"
import { TextImageContext } from "../../contexts/TextContext"
import parse from 'html-react-parser';

const emptyObj = {
    backgroundImage: '',
    backgroundSize: '',
    backgroundPosition: '',
    backgroundRepeat: ''
}

const HomeIntro = () => {
    const admin = useContext(LoginContext)
    const texts = useContext(TextImageContext)
    const [bg, setBg] = useState(emptyObj)

    useEffect(() => {
        if (texts.images.length > 0) {
            setBg({
                backgroundImage: `url(${require(`../../images/admin/${texts?.images[0].file}`)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            })
        }
    }, [texts.images])

    return (
        <section className="relative shadow-2xl bg-gray-500 bg-blend-multiply" style={bg}>
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <div className="relative w-1/2 mx-auto">
                    <div className="relative animate-fade-down animate-once animate-duration-500 animate-ease-linear animate-normal">
                        {texts.elements.length > 0 && parse(texts.elements[0].element)}
                        {admin.user.id && <EditContent id="1" type="text"/>}
                    </div>
                    <div className="mb-8 mt-4 px-16 relative animate-fade-up animate-once animate-duration-500 animate-delay-500 animate-ease-linear animate-normal">
                        {texts.elements.length > 0 && parse(texts.elements[1].element)}
                        {admin.user.id && <EditContent id="2" type="text"/>}
                    </div>
                </div>
                <div className="flex space-x-4 justify-center items-center">
                    <a href="#" className="w-40 py-3 text-lg font-semibold text-center text-white rounded-full bg-gray-900 hover:bg-white hover:text-gray-900 duration-500 focus:outline-none">
                        Learn More
                    </a>
                    <a href="#" className="w-40 py-3 sm:ms-4 text-lg font-semibold text-center text-sky-600 rounded-full bg-white hover:text-gray-900 duration-500 focus:outline-none">
                        Hire
                    </a>  
                </div>
            </div>
            {admin.user.id && <EditContent id="1" type="image"/>}
        </section>
    )
}

export default HomeIntro