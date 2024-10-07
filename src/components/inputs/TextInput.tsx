import { FormEvent } from "react";

interface textInput {
    id: string;
    label: string;
    type: string;
    value: string;
    placeholder: string;
    isRequired: boolean;
    handleChange: Function;
}

const TextInput = (props: textInput) => {
    return (
        <div className="w-full">
            <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>
            <input type={props.type} id={props.id} name={props.id} value={props.value} onChange={(e: FormEvent<HTMLInputElement>) => props.handleChange(e)} placeholder={props.placeholder} required={props.isRequired} className="border border-sky-600 text-gray-900 text-sm rounded-lg focus:border-dashed focus:ring-0 focus:border-sky-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white" />
        </div>
    )
}

export default TextInput