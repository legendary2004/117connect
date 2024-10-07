import { FormEvent } from "react";

interface file {
    id: string;
    label: string;
    handleChange: Function
}

const File = (props: file) => {
    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={props.id}>{props.label}</label>
            <input onChange={(e: FormEvent<HTMLInputElement>) => props.handleChange(e)} className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id={props.id} name={props.id} type="file" />
        </>
    )
}

export default File