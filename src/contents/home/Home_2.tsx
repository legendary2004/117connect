import { ReactNode, useContext, useEffect, useState } from "react";
import EditContent from "../../components/buttons/EditContent";
import FlexClass from "../../components/classes/FlexClass"
import Img_1 from "../../components/images/Img_1"
import { LoginContext } from "../../contexts/LoginContext";
import axios from "axios";
import parse from 'html-react-parser';
import { TextImageContext } from "../../contexts/TextContext";


const Home_2 = () => {
    const login = useContext(LoginContext)
    const texts = useContext(TextImageContext)
    
    return (
        <FlexClass header="About us" id="div_1">
            {texts.images.length > 0 && <Img_1 src={require(`../../images/admin/${texts.images[1].file}`)} id="2"/>}
            <div className="lg:w-5/12 relative" id="2">
                {texts.elements.length > 0 && parse(texts.elements[2]?.element)}
                <br/>
                {login.user.id && <EditContent id="3" type="text"/>}
            </div>
        </FlexClass>
    )
}

export default Home_2