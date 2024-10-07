interface header {
    header: string;
}

const FooterHeader = (props: header) => {
    return (
        <h1 className="text-xl font-bold text-white">{props.header}</h1>
    )
}

export default FooterHeader