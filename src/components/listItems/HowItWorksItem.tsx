import { useState } from "react"

interface howItWorks {
    before: string;
    after: string;
    image: any
}

// before:content-["${props.after}"]

const HowItWorksItem = (props: howItWorks) => {
    const [classes, setClasses] = useState("")
    const [beforeClass, setBeforeClass] = useState(`${props.before} before:font-bold before:text-2xl`)

    const openHover = () => {
        setClasses("[transform:rotateX(90deg)] duration-500")
        setTimeout(() => {
            setClasses("[transform:rotateX(0deg)] duration-500 ")
            setBeforeClass(`${props.after} before:text-sm lg:before:text-lg before:font-normal`)
        }, 300)
    }

    const leaveHover = () => {
        setClasses("[transform:rotateX(90deg)] duration-500")
        setTimeout(() => {
            setClasses("[transform:rotateX(0deg)] duration-500")
            setBeforeClass(`${props.before} before:font-bold before:text-2xl`)
        }, 300)
    }

    return (
        <div className="w-full bg-gradient-to-r from-sky-600 to-90% to-sky-500 rounded-3xl h-32 flex items-center justify-center">
            <div className="w-14 h-full">
                <img className="h-full mix-blend-multiply" src={props.image} />
            </div>
            <div className="w-full h-full flex items-center" onMouseEnter={openHover} onMouseLeave={leaveHover}>
                {<p className={`
                        w-full 
                        ms-3 
                        text-white
                        ${beforeClass}
                        ${classes}
                    `
                }>
                    
                </p>}
            </div>
        </div>
    )
}

export default HowItWorksItem