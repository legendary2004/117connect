import { FormEvent, useContext, useEffect, useState } from "react"
import { adminObj, handleInputChange } from "../components/functions/HandleFormChange"
import TextInput from "../components/inputs/TextInput"
import { LoginContext } from "../contexts/LoginContext"
import ResultModal from "../components/modals/ResultModal"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const login = useContext(LoginContext)
    const [formProp, setFormProp] = useState(adminObj)

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        login.handleLogin(formProp.email, formProp.password)
    }

    useEffect(() => {
        if (login.user.id) navigate("/")
    }, [login.user])

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <a href="#" onClick={() => navigate("/")} className="text-sky-600">Home</a>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitForm}>
                            <TextInput 
                                id="email"
                                label="Email"
                                type="email"
                                value={formProp.email}
                                placeholder="user@gmail.com"
                                isRequired={true}
                                handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
                            />
                            <TextInput 
                                id="password"
                                label="Password"
                                type="password"
                                value={formProp.password}
                                placeholder="******"
                                isRequired={true}
                                handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
                            />
                            <button type="submit" className="w-full text-white bg-sky-600 hover:bg-sky-700 duration-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
            {login.msg && <ResultModal message={login.msg} closeModal={() => login.removeMsg()} />}
        </section>
    )
}

export default Login