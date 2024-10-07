import { useContext } from "react"
import { MdModeEdit } from "react-icons/md"
import { ModalContext } from "../../contexts/ModalContext"
import ChangeModal from "../modals/Modal"

interface id {
    id: string;
    type: string;
}

const EditContent = (prop: id) => {
    const modal = useContext(ModalContext)
    return (
        <div>
            <button onClick={() => modal.open(prop.id, prop.type)} className="absolute right-0 bottom-0 w-10 h-10 bg-white rounded-full p-2">
                <MdModeEdit className="w-full h-full" />
            </button>
            {modal.isModalVisible.isTextVisible && <ChangeModal />}
        </div>
    )
}

export default EditContent