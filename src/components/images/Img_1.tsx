import { useContext, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { ModalContext } from "../../contexts/ModalContext";
import ImageModal from "../modals/ImageModal";
import { LoginContext } from "../../contexts/LoginContext";

interface image {
    id: string;
    src: string
}

const Img_1 = (props: image) => {
    const modal = useContext(ModalContext)
    const login = useContext(LoginContext)
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="w-full relative lg:w-7/12" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <img className="rounded-xl w-full mt-1 md:block" src={props.src} alt="image" loading="lazy" width="" height="" />
            {login.user.id && isHover && <div className={`absolute left-0 top-0 z-50 bg-white/50 w-full h-full rounded-xl animate-in slide-in-from-bottom-1/2 duration-1000`}>
                <div className="h-full flex items-center justify-center">
                    <button>
                        {isHover && <MdModeEdit className="w-10 h-10" onClick={() => modal.open(props.id, 'image')}/>}
                    </button>
                </div>
            </div>}
            {modal.isModalVisible.isImgVisible && <ImageModal />}
        </div>
    )
}

export default Img_1