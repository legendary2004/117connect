interface addButton {
    label: string;
    colSpan: number
    buttonEvent: Function
}

const AddItem = (props: addButton) => {
    return (
        <td colSpan={props.colSpan}>
            <button onClick={() => props.buttonEvent()} className="w-full p-4 flex items-center justify-center font-bold text-2xl sm:rounded-b-lg hover:bg-gray-200 duration-500">{props.label}</button>
        </td>
    )
}

export default AddItem