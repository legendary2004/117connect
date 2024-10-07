import { FormEvent, useContext, useState } from "react"
import ModalClass from "../classes/ModalClass"
import File from "../inputs/File"
import { ModalContext } from "../../contexts/ModalContext"
import axios from "axios"
import ResultModal from "./ResultModal"

const ImageModal = () => {
    const modal = useContext(ModalContext)
    const [file, setFile] = useState<File | null>()
    const [message, setMessage] = useState('')

    const handleFileChange = (e: FormEvent<HTMLInputElement>) => {
        const files = e.currentTarget?.files?.item(0)
        setFile(files)
        
    }

    const confirmFileChange = () => {
        if (file) {
            const form = new FormData()
            form.append("id", modal.id)
            form.append("file", file)
            axios.post("http://localhost:5000/handleImageChange", form).then(res => setMessage(res.data.message))
        }
    }

    return (
        <ModalClass label="Edit image" buttonEvent={confirmFileChange}>
            <File 
                id="file"
                label="Upload file"
                handleChange={(e: FormEvent<HTMLInputElement>) => handleFileChange(e)}
            />
            {message && <ResultModal message={message} closeModal={() => setMessage("")} />}
        </ModalClass>
    )
}

export default ImageModal