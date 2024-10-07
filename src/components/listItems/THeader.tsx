interface label {
    label: string
}

const THeader = (prop: label) => {
    return (
        <th scope="col" className="px-6 py-3">
            {prop.label}
        </th>
    )
}

export default THeader