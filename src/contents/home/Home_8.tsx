import { FormEvent, useContext, useState } from "react";
import TextArea from "../../components/inputs/TextArea"
import { ModalContext } from "../../contexts/ModalContext";
import ChangeModal from "../../components/modals/Modal";
import { LoginContext } from "../../contexts/LoginContext";
import EditContent from "../../components/buttons/EditContent";
import { TextImageContext } from "../../contexts/TextContext";
import parse from "html-react-parser"
import TextInput from "../../components/inputs/TextInput";
import { contactObj, handleInputChange, handleTextAreaChange } from "../../components/functions/HandleFormChange";
import axios from "axios";
import ResultModal from "../../components/modals/ResultModal";

const Home_8 = () => {
    const modal = useContext(ModalContext)
    const login = useContext(LoginContext)
    const texts = useContext(TextImageContext)
    const [formProp, setFormProp] = useState(contactObj)
    const [msg, setMsg] = useState("")

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        axios.post("http://localhost:5000/contact", formProp)
        .then(res => setMsg(res.data.message))
    }

    return (
        <div className="mt-16" id="div_5">
            <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl py-20 md:flex items-center justify-between">
                    <div className="flex items-end justify-start space-x-5 relative">
                        <div className="w-[90%] space-y-3">
                            {texts.elements.length > 0 && parse(texts.elements[4].element)}
                            {login.user.id && <EditContent id="5" type="text"/>
                        }
                        </div>
                    </div>
                    {/* <button type="button" className="text-white bg-gradient-to-r from-sky-600 to-90% to-sky-500 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Contact us</button> */}
                </div>
            </section>
            <form onSubmit={submitForm} className="mt-20 max-w-screen-xl mx-auto px-5 grid gap-y-3 md:grid-cols-3 place-items-center md:gap-x-3">
                <div className="w-full">
                    <TextInput 
                        id="firstName"
                        label="First name"
                        type="text"
                        placeholder="John"
                        value={formProp.firstName}
                        isRequired={true}
                        handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
                    />
                </div>
                <div className="w-full">
                    <TextInput 
                        id="lastName"
                        label="Last name"
                        type="text"
                        placeholder="Doe"
                        value={formProp.lastName}
                        isRequired={true}
                        handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
                    />
                </div>
                <div className="w-full">
                    <TextInput 
                        id="company"
                        label="Company"
                        type="text"
                        placeholder="John Doe's company"
                        value={formProp.company}
                        isRequired={true}
                        handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
                    />
                </div>
                <div className="w-full col-span-full flex items-center justify-center space-x-3">
                    <div className="w-full">
                        <TextInput 
                            id="email"
                            label="Email"
                            type="email"
                            placeholder="johndoe@gmail.com"
                            value={formProp.email}
                            isRequired={true}
                            handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
                        />
                    </div>
                    <div className="w-full">
                        <TextInput 
                            id="phone"
                            label="Phone number"
                            type="tel"
                            placeholder="0123456"
                            value={formProp.phone}
                            isRequired={true}
                            handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
                        />
                    </div>
                </div>
                <div className="w-full col-span-full">
                    <TextArea id="message" label="Enter message" value={formProp.message} handleChange={(e: FormEvent<HTMLTextAreaElement>) => handleTextAreaChange(e, setFormProp)} />
                </div>
                <div className="col-span-full place-content-center mt-10">
                    <button type="submit" className="text-white text-lg font-bold bg-gradient-to-r from-sky-600 to-90% to-sky-500 focus:outline-none font-medium rounded-full text-sm px-12 py-4 text-center me-2 mb-2">Contact us</button>
                </div>
            </form>
            {msg && <ResultModal message={msg} closeModal={() => setMsg("")}/>}
        </div>

    )
}

export default Home_8