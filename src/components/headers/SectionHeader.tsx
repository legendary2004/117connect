interface header {
    header: string;
}

const SectionHeader = (prop: header) => {
    return (    
        <div>
            <h1 className="mt-12 text-4xl font-bold text-center">{prop.header}</h1>
            <div className="my-5 md:my-10 w-20 h-3 bg-sky-600 mx-auto" />
        </div>
    )
}

export default SectionHeader