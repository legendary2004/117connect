interface label {
    label: string | number
}

const TData = (prop: label) => {
    return (
        <td className="px-6 py-4">
            {prop.label}
        </td>

    )
}

export default TData