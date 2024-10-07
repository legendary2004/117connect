import axios from "axios";
import React, { createContext, FormEvent, PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface admin {
    id: string;
    email: string;
    password: string
}
const userObj: admin = {
    id: '',
    email: '',
    password: '',
}

interface loginContext {
    user: admin;
    msg: string;
    handleLogin: Function;
    removeMsg: Function;
    signOut: Function
}


export const LoginContext = createContext<loginContext>({
    user: userObj,
    msg: '',
    handleLogin() {},
    removeMsg() {},
    signOut() {}
})

const LoginContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState(userObj)
    const [msg, setMsg] = useState("")

    function handleLogin(email: string, pass: string) {
        axios.post("http://localhost:5000/login", {
            email,
            pass
        })
        .then(res => {
            setMsg(res.data.message)
            if (res.data.user) setUser(res.data.user)
        })
    }

    function removeMsg() {
        setMsg("")
    }

    function signOut() {
        setUser(userObj)
    }

    useEffect(() => {
        const currentUser = JSON.parse(window.localStorage.getItem('admin') || '""');
        if (currentUser) {
            setUser(currentUser);
        }
      }, []);

    useEffect(() => {
        window.localStorage.setItem('admin', JSON.stringify(user));
    }, [user]);

    return (
        <LoginContext.Provider value={{user, msg, handleLogin, removeMsg, signOut}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider