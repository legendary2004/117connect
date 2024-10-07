interface removeButton {
    id: string;
    remove: Function
}

const RemoveTableItem = (props: removeButton) => {
    return (
        <td className="px-6 py-4">
            <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => props.remove(props.id)}>Remove</button>
        </td>
    )
}

export default RemoveTableItem