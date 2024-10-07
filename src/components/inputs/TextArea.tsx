import { FormEvent } from "react";

interface textArea {
    id: string;
    label: string;
    value: string;
    handleChange: Function
}

const TextArea = (props: textArea) => {
    return (
        <> 
            <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>
            <textarea id={props.id} value={props.value} onChange={(e: FormEvent<HTMLTextAreaElement>) => props.handleChange(e)} rows={5} className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-sky-600 dark:placeholder-gray-400 dark:text-white focus:ring-0" placeholder="Write your thoughts here..." required></textarea>
        </>
    )
}

export default TextArea