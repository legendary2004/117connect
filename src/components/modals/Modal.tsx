import { useContext, useRef, useState } from "react"
import { ModalContext } from "../../contexts/ModalContext"
import WYSIWYG from "../inputs/WYSIWYG";
import JoditEditor from "jodit-react";
import editor from "quill/core/editor";
import axios from "axios";
import ResultModal from "./ResultModal";
import ModalClass from "../classes/ModalClass";

const ChangeModal = () => {
    const modal = useContext(ModalContext)
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [message, setMessage] = useState('')

    const confirmChange = () => {
        axios.post("http://localhost:5000/handleTextChange", {
            id: modal.id,
            content
        }).then(res => setMessage(res.data.message))
    }

    return (
        <ModalClass label="Edit text" buttonEvent={confirmChange}>
            <JoditEditor
                ref={editor}
                value={content}
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={setContent}
            />
            {message && <ResultModal message={message} closeModal={() => setMessage("")} />}
        </ModalClass>
    )
}

export default ChangeModal