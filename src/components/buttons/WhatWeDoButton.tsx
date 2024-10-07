import { IoPersonAddSharp } from "react-icons/io5"

const WhatWeDoButton = () => {
    return (
        <button className="w-full py-3 flex flex-col items-center justify-center rounded-lg hover:bg-gray-200 duration-500">
                    <IoPersonAddSharp className="w-16 h-16 text-sky-600" />
                    <span className="text-xl font-semibold">Virtual Assistant</span>
                </button>
    )
}

export default WhatWeDoButton