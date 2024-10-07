import { useContext } from "react"
import FlexClass from "../../components/classes/FlexClass"
import SectionHeader from "../../components/headers/SectionHeader"
import Img_1 from "../../components/images/Img_1"
import WhyChooseUs from "../../components/lists/WhyChooseUs"
import { LoginContext } from "../../contexts/LoginContext"
import EditContent from "../../components/buttons/EditContent"
import { TextImageContext } from "../../contexts/TextContext"
import parse from "html-react-parser"

const Home_4 = () => {
    const login = useContext(LoginContext)
    const texts = useContext(TextImageContext)

    return (
        <FlexClass header="Why choose us?" id="div_3">
            <div className="relative lg:w-5/12">
                {texts.elements.length > 0 && parse(texts.elements[3].element)}
                <div className="mt-10">
                    {login.user.id && <EditContent id="4" type="text"/>}
                </div>
            </div>
            {texts.images.length > 0 && <Img_1 src={require(`../../images/admin/${texts.images[2].file}`)} id="3"/>}
        </FlexClass>
    )
}

export default Home_4