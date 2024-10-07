import { FormEvent, useState } from "react"
import ModalClass from "../classes/ModalClass"
import File from "../inputs/File"
import TextInput from "../inputs/TextInput"
import { handleInputChange, handleTextAreaChange } from "../functions/HandleFormChange"
import axios from "axios"
import ResultModal from "./ResultModal"
import TextArea from "../inputs/TextArea"

const ServiceModal = () => {
    const [service, setService] = useState({name: '', description: ''})
    const [file, setFile] = useState<File | null>()
    const [message, setMessage] = useState("")

    const handleFileChange = (e: FormEvent<HTMLInputElement>) => {
        const files = e.currentTarget?.files?.item(0)
        setFile(files)
        
    }

    const submit = () => {
        if (file) {
            const form = new FormData()
            form.append("name", service.name)
            form.append("description", service.description)
            form.append("serviceImg", file)
            axios.post("http://localhost:5000/addService", form).then(res => setMessage(res.data.message))
        }
    }

    return (
        <ModalClass label="Add service" buttonEvent={submit}>
            <TextInput id="name" label="Service name" placeholder="Service name..." isRequired={false} type="text" value={service.name} handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setService)}/>
            <TextArea id="description" label="Description" value={service.description} handleChange={(e: FormEvent<HTMLTextAreaElement>) => handleTextAreaChange(e, setService)} />
            <File id="file" label="Service photo" handleChange={(e: FormEvent<HTMLInputElement>) => handleFileChange(e)} />
            {message && <ResultModal message={message} closeModal={() => setMessage("")} />}
        </ModalClass>
    )
}

export default ServiceModal